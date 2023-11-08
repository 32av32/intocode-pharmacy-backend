const Product = require('../models/Product.model')


module.exports.productsController = {
    getProduct: async (req, res) => {
        try {
            res.json(await Product.findById(req.params.id).populate('category'))
        } catch (err) {
            res.json(err)
        }
    },
    getProducts: async (req, res) => {
        try {
            res.json(await Product.find(req.query?.category ? { post: req.query.category } : null))
        } catch (err) {
            res.json(err)
        }
    },
    postProduct: async (req, res) => {
        try {
            const {name, description, price, category, byPrescription} = req.body
            await Product.create({name, description, price, category, byPrescription})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchProduct: async (req, res) => {
        try {
            const {name, description, price, category, byPrescription} = req.body
            await Product.findByIdAndUpdate(req.params.id, {name, description, price, category, byPrescription})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    }
}