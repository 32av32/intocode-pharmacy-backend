const Cart = require("../models/Cart.model");
const User = require("../models/User.model");


module.exports.cartsController = {
    getCart: async (req, res) => {
        try {
            res.json(await Cart.findById(req.params.id).populate('user products'))
        } catch (err) {
            res.json(err)
        }
    },
    getCarts: async (req, res) => {
        try {
            res.json(await Cart.find().populate('user products'))
        } catch (err) {
            res.json(err)
        }
    },
    deleteCart: async (req, res) => {
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
}