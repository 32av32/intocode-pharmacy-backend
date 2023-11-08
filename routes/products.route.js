const { Router } = require('express')
const { productsController } = require('../controllers/products.controller')
const router = Router()


router.get('', productsController.getProducts)
router.get('/:id', productsController.getProduct)

module.exports = router;