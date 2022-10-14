const express = require("express")
const pokemonRoute = express()
const { v4: uuidv4 } = require('uuid')
const pokemon = [
    {
        name: "pikachu",
        type: "electric",
        _id: uuidv4()
    },

    {
        name: "chamander",
        type: "fire",
        _id: uuidv4()
    },

    {
        name: "squirtle",
        type: "water",
        _id: uuidv4()
    },

    {
        name: "gengar",
        type: "ghost",
        _id: uuidv4()
    }
]

pokemonRoute.use("/", (req, res, next) => {
    console.log("Get request")
    next()
})

pokemonRoute.use("/", (req, res, next) => {
    console.log("Middleware executed")
    req.body = {name : "squrrel"}
    next()
})

pokemonRoute.get("/", (req, res, next) => {
    console.log("Get request received")
    res.send(pokemon)
})


module.exports = pokemonRoute 