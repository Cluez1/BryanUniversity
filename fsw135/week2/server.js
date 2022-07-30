const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Middleware (For every request)
app.use(express.json())
app.use(morgan('dev'))

//Connecting to mongoDB

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/gamesdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)


//Routes

app.use("/games", require("./routes/gameRouter.js"))
// app.use("/tvshows", require("./routes/tvshowRouter.js"))

//Error handler
app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})