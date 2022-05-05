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

const userFormData = require(".model")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello world")
})

app.post("/hook", async (req, res) => {

    //parse answers from the response
    answers = req.body.form_response.answers
    n = Object.keys(answers).length
    result = []

    for(var i = 0; i < n; i++){
        if(answers[i].type == "choice"){
            result.push(answers[i].choice.label)
        }
        if(answers[i].type == "number"){
            result.push(answers[i].number)
        }
    }

    console.log(results)

    //initialize user form data schema 

    //add schema to database 







    res.json("Payload processed")
})

app.listen(PORT, ()=>console.log("Server on started on: http://localhost:" + PORT))