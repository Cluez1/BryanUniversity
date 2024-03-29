const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Game  Schema
const InventoryModel  = new Schema ({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    release_year: {
        type:Number,
        required:true,
        min: 2020
    }
});

module.exports = mongoose.model('Inventory', InventoryModel );