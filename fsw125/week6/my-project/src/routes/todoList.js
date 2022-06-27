const express = require('express');
const res = require('express/lib/response');
const todoList = express.Router();
const {v4: uuidv4 } = require('uuid');

let todoItems = [
    {name:'Workout', description: 'Workout', recyclable:true, qty:10, ppu: '$1.00',_id: uuidv4()},
    {name:'Crushed Soda Cans', description: 'Metal', recyclable:true, qty:10, ppu: '$4.00',_id: uuidv4()},
    {name:'Bottle filled with motor oil', description: 'Cardboard', recyclable:false, qty:50, ppu: '0',_id: uuidv4()},
    {name:'Glass Pepsi Bottles', description: 'Glass', recyclable:true, qty:60, ppu: '$50.00',_id: uuidv4()},

];

// A roup Parameter is never null or undefined
// A route parameter is always a strong with positive length.



//Get all
todoList

.get('/', (req, res,) => {
    res.status(200).send(todoItems);
    console.log('pre next');
})


.get('/', (req,res) => {
    req.body = {somePropKey: 'value'}
})


.get('/', (req,res,) => {
    
    res.send(req.body)
})

// Get one
.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const singleItem = todoItems.find(todoItem => todoItem._id === todoId);
    // console.log(req.params.todoId);
    // console.log(singleItem);

    if (singleItem) {
        const error = new Error('This item was not found, please try again.');
        return next(error)
        // res.send(error)
    }
    res.send(singleItem);
})


.get('/search/description', (req,res) => {
    const itemDes = req.query.name;
    const filteredItems = todoItems.filter(todoItem => todoItem.description === itemDes);
    res.send(filteredItems);
})



//Post
todoList.post('/todoItems', (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todoItems.push(newTodo);

    console.log(todoItems)
    res.send(`successfully added ${todoItems.name} to the database`);
})

//Delete
.delete('/:todoId', (req,res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoItems.findIndex(todoItem => todoItem._id === todoId);
    todoItems.splice(todoIndex, 1);

    res.send('Todo has been deleted!')
})


//Put
.put('/:todoId', (req,res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoItems.findIndex(todoItem => todoItem._id === todoId);
    const updatedTodo = Object.assign(todoItems[todoIndex],req.body);

    res.send(`Todo has been updated!`)
})


module.exports = todoItems;