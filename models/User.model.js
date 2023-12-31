const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Cart = require("../models/Cart.model");
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cash: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.post('findOneAndDelete', async function(doc) {
    await Cart.deleteOne({ user: doc._id })
});

module.exports = mongoose.model('User', userSchema)