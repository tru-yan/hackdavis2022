const mongoose = require("mongoose")
const Schema = mongoose.Schema 
const Model = mongoose.model

const userFormData = new Schema({
    Question1: {
        type: String
    },

    Question2: {
        type: String
    }
})