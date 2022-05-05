const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 5000

mongoose.connect("mongodb://127.0.0.1:27017/form-data", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then( () => console.log("Connected to DB"))
    .catch(console.error)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello world")
})

app.post("/hook", (req, res) => {
    res.json("Payload processed")
})

app.listen(PORT, ()=>console.log("Server on started on: http://localhost:" + PORT))