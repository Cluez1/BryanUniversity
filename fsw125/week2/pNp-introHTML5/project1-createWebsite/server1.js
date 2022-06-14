const express = require('express');
const app = express();

const PORT = 3000;
console.log(app);

app.get('/userData', (req, res) => {
    res.send('Hello World!')
});

//server start logic
app.listen(PORT, () =>{
    console.log(`My first server using Express.js and Nodemon has been started on port: ${PORT}`)
});