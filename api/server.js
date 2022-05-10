const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/form-data", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then( () => console.log("Connected to DB"))
    .catch(console.error)

const userFormData = require("./model")

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

    //test with actual webhook
    const user = new userFormData({
        Question1: result[0], 
        Question2: result[1], 
        Question3: result[2], 
        Question4: result[3],
        Question5: result[4],
        Question6: result[5],
        Question7: result[6],
        Question8: result[7],
        Question9: result[8],
        Question10: result[9],
        Question11: result[10], 
        Question12: result[11], 
        Question13: result[12]
    })

    user.save()

    console.log(result)

    res.json("Payload processed")
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("./../frontend/build"))
}

app.listen(PORT, ()=>console.log("Server on started on: http://localhost:" + PORT))