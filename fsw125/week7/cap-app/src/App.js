import GameHandleForm from './components/GameHandleForm';
import gameStopItems from './Routes/VideoGameList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './components/Games';
import './App.css';



const App = () => {
  const [games, setGame] = useState([]);

  const getGames = () => {
    axios.get('/gameStopList')
    .then(res => setGame(res.data))
    .catch(err => console.log(err.response.data.err));
  }

  const addGame = (newGame) => {
    axios.post('/gameStopList', newGame)
    .then(res => 
      setGame(prevGames => [...prevGames. res.data]))
    .then(err => console.log(err))
  };

  const deleteGame = (gameId) => {
    axios.delete(`/gameStopList/${gameId}`)
    .then(res =>{
      setGame(prevGames => prevGames.filter(game = gameList._id !== gameId))
    })
  }

  const editGame = (updates, gameId) => {
    axios.put(`/gameStopList/${gameId}`, updates)
    .then(res =>{
      setGame(prevGames => prevGames.map(game = gameList._id !== gameId ? game : res.data))
    })
    .catch(err => console.log(err))
  }

  
  useEffect(() => {
    getGames();
  }, []);

  const gameList = gameStopItems.map(game => <Game {...game} deleteGame={deleteGame} key={gameList.name} />)

  return (
    
    <div className='App'>
    
    <GameHandleForm
    btnText='Add Game'
    submit={addGame}/>
    {gameList}
      
    </div>
  )
};

export default App

