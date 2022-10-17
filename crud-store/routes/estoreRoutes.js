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

estoreRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findById({_id: req.params.inventoryId}, (err, foundInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundInventory)
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

estoreRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database`)
    })
})

estoreRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})






module.exports = estoreRouter