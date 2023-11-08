const Category = require('../models/Category.model')


module.exports.categoriesController = {
    getCategories: async (req, res) => {
        try {
            res.json(await Category.find())
        } catch (err) {
            res.json(err)
        }
    },
    postCategory: async (req, res) => {
        try {
            const {name, description} = req.body
            await Category.create({name, description})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchCategory: async (req, res) => {
        try {
            const {name, description} = req.body
            await Category.findByIdAndUpdate(req.params.id, {name, description})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    }
}