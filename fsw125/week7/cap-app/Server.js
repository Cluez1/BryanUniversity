//Step 1
const express = require('express');
const morgan = require('morgan');


//Step 2 - Require my router
const gameStopItems = require('./src/Routes/VideoGameList');

//Step 3 - Create port
const app = express();
const PORT = 9000;

//Step 4 - check work
console.log(app);


//Step 5 middleware
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/',gameStopItems) // for parsing application/json

//error handling Logic
//Must be in this order
app.use((err, req,res, next)=> {
    console.log(err);
    return res.send({errMsg: err.message})
})



//server startup logic
app.listen(PORT, () =>{
    console.log(`Week 7 Capstone project using Express.js. Nodemon has been started on port: ${PORT}.`)
});


