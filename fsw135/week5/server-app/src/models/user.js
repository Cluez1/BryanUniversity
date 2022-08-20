const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bycrypt = require('bycrypt')

const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  
})

userSchema.pre('save',function(next) {
  const user = this
  if(!user.isModified('password')) return next()
  bycrypt.hash(user.password, 8, (err, hash) =>{
    if(err) return next(err)
    next()
  })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bycrypt.compare(passwordAttempt, this.password, (err,isMatch) => {
    if(err) return callback(err)
    return callback
  })
  
  userSchema.methods.withoutPassword = function(){
    const user = this.object()
    delete user.password
    return user
  }
}

module.exports = mongoose.model("User", userSchema)