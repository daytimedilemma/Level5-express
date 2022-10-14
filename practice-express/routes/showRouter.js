const express = require("express")
const showRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Watchmen", _id: uuidv4() },
    { title: "=Westworld", _id: uuidv4() },
    { title: "Friends", _id: uuidv4() }
]

showRouter.get("/", (req, res) => {
    res.send(tvShows)
})

showRouter.get("/:showId", (req, res) => {
    const showId = req.params.showId
    const foundShow = tvShows.find(show => show._id === showId)
    res.send(foundShow)
})

showRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database!`)
})

// showRouter.route("/")
// get((req, res) => {
//     res.send(tvShows)
// })
// post((req, res) => {
//     const newShow = req.body
//     newShow._id = uuidv4()
//     tvShows.push(newShow)
//     res.send(`Successfully added ${newShow.title} to the database!`)
// })



module.exports = showRouter