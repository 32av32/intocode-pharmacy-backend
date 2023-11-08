const User = require('../models/User.model')
const Cart = require('../models/Cart.model')
const Product = require('../models/Product.model')


module.exports.usersController = {
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const cart = await Cart.findOne({user: user._id})

            res.json({user, cart})
        } catch (err) {
            res.json(err)
        }
    },
    getUsers: async (req, res) => {
        try {
            res.json(await User.find())
        } catch (err) {
            res.json(err)
        }
    },
    postUser: async (req, res) => {
        try {
            const {name, email} = req.body
            const user = await User.create({name, email})

            await Cart.create({user: user._id})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchUser: async (req, res) => {
        try {
            const {name, email} = req.body

            await User.findByIdAndUpdate(req.params.id, {name, email})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    },
    addCash: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)

            user.cash += req.body?.cash
            await user.save()
            res.json('Cash added')
        } catch (err) {
            res.json(err)
        }
    },
    addToCart: async (req, res) => {
        try {
            const {product, recipe} = req.body
            const user = await User.findById(req.params.id)
            const cart = await Cart.findOne({user: user._id})
            const productDocument = await Product.findById(product)

            if (productDocument.byPrescription) {
                if (!recipe) {
                    return res.json('You need recipe to buy this product')
                }
            }

            cart.products.push(product)
            await cart.save()
            res.json('Product added')
        } catch (err) {
            res.json(err)
        }
    },
    removeFromCart: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const cart = await Cart.findOne({user: user._id})
            const {product} = req.body

            cart.products.pull(product)
            await cart.save()
            res.json('Product removed')
        } catch (err) {
            res.json(err)
        }
    },
    clearCart: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const cart = await Cart.findOne({user: user._id})
            cart.products = []
            await cart.save()
            res.json('Cart is empty now')
        } catch (err) {
            res.json(err)
        }
    },
    makeOrder: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const cart = await Cart.findOne({user: user._id}).populate('products')
            let finalPrice = cart.products.reduce((res, item) => res + item.price, 0)

            if (user.cash >= finalPrice) {
                user.cash -= finalPrice
                await user.save()
                cart.products = []
                await cart.save()
                res.json('The order has been placed')
            } else {
                res.json('Not enough cash')
            }
        } catch (err) {
            res.json(err)
        }
    }
}