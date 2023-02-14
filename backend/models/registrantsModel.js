const mongoose = require('mongoose')

const Schema = mongoose.Schema

const registrantsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        rquired: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Registrants', registrantsSchema)