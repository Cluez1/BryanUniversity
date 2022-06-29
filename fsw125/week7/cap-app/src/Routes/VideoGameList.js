const express = require('express');
const res = require('express/lib/response');
const VideoGameList = express.Router();
const {v4: uuidv4 } = require('uuid');

let gameStopItems = [
    {name:'Call of Duty', description: 'Call of Duty is a 2003 first-person shooter game developed by Infinity Ward and published by Activision.', Online:true, players:10, price: '$19.00',_id: uuidv4()},
    {name:'Resident Evil', description: 'Resident Evil is an action horror film series based on the Japanese video game franchise of the same name by Capcomuter', Online:true, players:10, price: '$40.00',_id: uuidv4()},
    {name:'World of Tanks', description: 'Over 700 of historically accurate aircraft and ground vehicles. Fight with Real Players. Join Now absolutely for free!', Online:true, players:50, price: '60.00',_id: uuidv4()},
    {name:'Donkey Kong', description: 'Donkey Kong This is the old school arcade game Donkey Kong and it is the full version with all 4 levels just like the original from back in the days of yore', Online:false, players:60, price: '$50.00',_id: uuidv4()},

];

// A roup Parameter is never null or undefined
// A route parameter is always a strong with positive length.



//Get all
VideoGameList

.get('/', (req, res,) => {
    res.status(200).send(gameStopItems);
    console.log('pre next');
})


.get('/', (req,res) => {
    req.body = {somePropKey: 'value'}
})


.get('/', (req,res,) => {
    
    res.send(req.body)
})

// Get one
.get('/:gameId', (req, res) => {
    const gameId = req.params.game._id;
    const singleGame = gameStopItems.find(game => game._id === gameId);
    // console.log(req.params.todoId);
    // console.log(singleItem);

    if (singleGame) {
        const error = new Error('This item was not found, please try again.');
        return next(error)
        // res.send(error)
    }
    res.send(singleGame);
})


.get('/search/description', (req,res) => {
    const itemDes = req.query.name;
    const filteredItems = gameStopItems.filter(game => game.description === itemDes);
    res.send(filteredItems);
})



//Post
.post('/VideoGameList', (req, res) => {
    const newGame = req.body;
    newGame._id = uuidv4();
    gameStopItems.push(newGame);

    console.log(gameStopItems)
    res.send(`successfully added ${gameStopItems.name} to the database`);
})

//Delete
VideoGameList.delete('/:gameId', (req,res) => {
    const gameId = req.params.gameId;
    const gameIndex = gameStopItems.findIndex(game => game._id === gameId);
    gameStopItems.splice(gameIndex)
    res.send('Game has been deleted!')
})


//Put
.put('/:gameId', (req,res) => {
    const gameId = req.params.gameId;
    const gameIndex = gameStopItems.findIndex(game => game._id === gameId);
    const updatedGame = Object.assign(gameStopItems[gameIndex],req.body);
    res.send(`Game has been updated!`)
});


module.exports = VideoGameList;