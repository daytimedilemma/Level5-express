const express = require("express")
const app = express()

app.use(express.json())



app.use("/", require("./routes/pokemonRoute"))

app.listen(6000, () => {
    console.log("The server is running port 6000")
})