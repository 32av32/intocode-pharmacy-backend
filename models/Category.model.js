const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
})

module.exports = mongoose.model('Category', categorySchema)