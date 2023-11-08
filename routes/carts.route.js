const { Router } = require('express')
const { cartsController } = require('../controllers/carts.controller')
const router = Router()


router.get('', cartsController.getCarts)
router.get('/:id', cartsController.getCart)
router.delete('/:id', cartsController.deleteCart)

module.exports = router;