const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()


router.get('/:id', usersController.getUser)
router.post('/:id/add_cash', usersController.addCash)
router.post('/:id/add_product', usersController.addToCart)
router.post('/:id/remove_product', usersController.removeFromCart)
router.get('/:id/clear_cart', usersController.clearCart)
router.get('/:id/make_order', usersController.makeOrder)

module.exports = router;