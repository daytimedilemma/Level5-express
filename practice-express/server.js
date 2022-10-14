const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



//Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and turns it into "req.body"
// app.use(first arg optional, express.json() will one on every single req)
// First arg - mount path ( endpoint )
// Second arg - Callback function - receives the request, also the 'next' function 

app.use(morgan("dev")) //Logs Requests to the console.

//connect to database
mongoose.connect("mongodb://localhost:27017/moviesdb", () => console.log("connected to database")) //whatever is after the 27017/ is the name of the database


app.use("/movies", require("./routes/movieRouter"))
app.use("/shows", require("./routes/showRouter"))

    // Argument 1. Endpoint (mount path)
    // Argument 2. Callback function


//error handle 4 arguments

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



            //1st arguement 1: Port;  2nd arguement 2: Call Back
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
}) // listen() is a function from express