const mongoose = require("mongoose")
const Schema = mongoose.Schema 
const Model = mongoose.model

const userFormData = new Schema({
    Question1: {
        type: String
    },

    Question2: {
        type: Number
    },

    Question3: {
        type: Number
    },

    Question4: {
        type: String
    },

    Question5: {
        type: String
    },

    Question6: {
        type: String
    },

    Question7: {
        type: String
    },

    Question8: {
        type: String
    },

    Question9: {
        type: String
    },

    Question10: {
        type: Number
    },

    Question11: {
        type: Number
    },

    Question12: {
        type: Number
    },

    Question13: {
        type: String
    }
})

const user = Model("user", userFormData)

module.exports = user; 