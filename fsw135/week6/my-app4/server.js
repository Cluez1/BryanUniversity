const express = require('express')
const app = express()
require('dotenv').config
const morgan = require('morgan')
const mongoose = require('mongoose')
// const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/my-app4',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)




app.use('/auth', require('./src/routes/authRouter'))




// app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']}))

app.use('/api/todo', require('./src/routes/todoRouter')) 


app.use((err, req,res,next) => {
  console.log(err)
  if(err.name === "Unauthorized Error"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})

