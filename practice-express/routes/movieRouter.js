const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const movies = [
    { title: "die hard", genre: "action", _id: uuidv4()},
    { title: "star wars IV", genre: "fantasy", _id: uuidv4()},
    { title: "lion king", genre: "fantasy", _id: uuidv4()},
    { title: "friday the 13th", genre: "horror", _id: uuidv4()}
]

//GET all movies
movieRouter.get("/", (req, res)=> {
    res.status(200)
    res.send(movies)
})

//GET one route

movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with the id ${movieId} was not found.`)
       return next(error)
    }
    
    res.status(200).send(foundMovie)
})

// GET by genre

movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})


//POST one movie
movieRouter.post("/", (req, res)=>{
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.status(201).send(newMovie)
})


//Delete one movie
movieRouter.delete("/:movieId", (req, res) =>{
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfuly deleted movie")
})

//Update one movie

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})

module.exports = movieRouter