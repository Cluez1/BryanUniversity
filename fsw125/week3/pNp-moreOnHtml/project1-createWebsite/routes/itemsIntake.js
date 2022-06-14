const express = require('express');
const itemsintake = express.Router();
const {v4: uuidv4 } = require('uuid');

let recycledItems = [
    {name:'Plastic Bottles', description: 'Plastic', recyclable:true, qty:10, ppu: '$1.00',_id: uuidv4()},
    {name:'Crushed Soda Cans', description: 'Metal', recyclable:true, qty:10, ppu: '$4.00',_id: uuidv4()},
    {name:'Bottle filled with motor oil', description: 'Cardboard', recyclable:false, qty:50, ppu: '0',_id: uuidv4()},
    {name:'Glass Pepsi Bottles', description: 'Glass', recyclable:true, qty:60, ppu: '$50.00',_id: uuidv4()},

];

itemsintake.get('/recycledItems', (req, res) => {
    res.send(recycledItems)
});


itemsintake.post('/recycledItems', (req, res) => {
    const newRecycledItems = req.body;
    newRecycledItems._id = uuidv4();
    recycledItems.push(newRecycledItems);

    console.log(recycledItems)
    res.send(`successfully added ${newRecycledItems.name} to the database`);
})


module.exports = itemsintake;