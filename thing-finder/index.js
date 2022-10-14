const express = require("express");
const app = express()

app.use(express.json())

app.use("/sports", require("./routes/sportsRoute"))

app.listen(7000, () =>{
    console.log("The server is running port 7000")
})



