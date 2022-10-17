const express = require("express")

const estoreRouter = express.Router()
const Inventory = require("../models/inventory")
// const {v4: uuidv4} = require('uuid')


estoreRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    }) 
})

estoreRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedInventory)
    })
})



module.exports = estoreRouter