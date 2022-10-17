const mongoose = require("mongoose")
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: Number
})

module.exports = mongoose.model("Inventory", inventorySchema)