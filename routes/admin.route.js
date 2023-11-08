const { Router } = require('express')
const {usersController} = require("../controllers/users.controller");
const {productsController} = require("../controllers/products.controller");
const {categoriesController} = require("../controllers/categories.controller");
const router = Router()


router.get('/users', usersController.getUsers)
router.post('/users', usersController.postUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/:id', usersController.patchUser)

router.post('', categoriesController.postCategory)
router.delete('/:id', categoriesController.deleteCategory)
router.patch('/:id', categoriesController.patchCategory)

router.post('', productsController.postProduct)
router.delete('/:id', productsController.deleteProduct)
router.patch('/:id', productsController.patchProduct)

module.exports = router;