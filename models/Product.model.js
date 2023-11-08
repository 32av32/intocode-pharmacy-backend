const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        require: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }],
    byPrescription: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', productSchema)