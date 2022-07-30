const express = require('express');
const res = require('express/lib/response');
const gameRouter = express.Router();
const Game = require('../models/inventory')


//Get All

gameRouter.get("/", (req, res, next) => {
    Game.find((err, games) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(games)
    })
})


//Post

gameRouter.post("/", (req, res, next) => {
    const newGame = new Game(req.body)
    newGame.save((err, savedGame) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedGame)
    })
  })

  //Delete

gameRouter.delete("/:gameId", (req, res, next) => {
    Game.findOneAndDelete(
      {_id: req.params.gameId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
})

//Update/Put

movieRouter.put("/:gameId", (req, res, next) => {
    Movie.findOneAndUpdate(
      { _id: req.params.gameID},
      req.body,
      {new: true},
      (err, updatedGame) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedGame)
      }
    )  
  })