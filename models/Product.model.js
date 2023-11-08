const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    byPrescription: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', productSchema)