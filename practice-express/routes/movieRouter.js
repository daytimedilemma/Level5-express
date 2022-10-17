const express = require("express")

const movieRouter = express.Router()
const Movie = require("../models/movie")
// const {v4: uuidv4} = require('uuid')


// Fake Data
// const movies = [
//     { title: "die hard", genre: "action", _id: uuidv4()},
//     { title: "star wars IV", genre: "fantasy", _id: uuidv4()},
//     { title: "lion king", genre: "fantasy", _id: uuidv4()},
//     { title: "friday the 13th", genre: "horror", _id: uuidv4()}
// ]

// GET all movies **** For express not MongoDB
// movieRouter.get("/", (req, res)=> {
//     res.status(200)
//     res.send(movies)
// }) 

//Get all movies with MongoDB
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//GET one route with Express
// movieRouter.get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if (!foundMovie) {
//         const error = new Error(`The item with the id ${movieId} was not found.`)
//         return next(error)
//     }
//     res.status(200).send(foundMovie)
// })

// GET by genre with Express 
// movieRouter.get("/search/genre", (req, res) => {
//     const genre = req.query.genre
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.status(200).send(filteredMovies)
// })

movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({genre: req.query.genre}, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//POST one movie with express not MongoDB
// movieRouter.post("/", (req, res)=>{
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.status(201).send(newMovie)
// })

//Post Request with MongoDB
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})


//Delete one movie for Express fake data
// movieRouter.delete("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     movies.splice(movieIndex, 1)
//     res.send("Successfuly deleted movie")
// })

//Deltete ONE movie with MongoDB
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
           return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database`)
    })
})

//Update one movie with express
// movieRouter.put("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], req.body)
//     res.status(201).send(updatedMovie)
// })

// Update one movie with MongoDB
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    {_id: req.params.movieId}, //find this one to update
    req.body, // Update the object with this data
    {new: true}, // Send back the updatetd version
    (err, updatedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedMovie)
    }
  )
})

module.exports = movieRouter