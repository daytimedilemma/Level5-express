const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))


mongoose.connect((`mongodb+srv://nickaminer94:${process.env.ATLAS_PASSWORD}@cluster0.oagvemx.mongodb.net/?retryWrites=true&w=majority`), () => console.log("connected to database"))
app.use("/estore", require("./routes/estoreRoutes"))

app.listen(7800, () => {
    console.log("The Server is running on port 7800")
})

