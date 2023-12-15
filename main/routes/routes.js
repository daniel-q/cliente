const express = require('express')
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../../presentation/controllers/productController')
const { getUsers, getUserById, createUser, findSalaryGreater, deleteUser,findSalaryLower,findBySex } = require('../../presentation/controllers/userController')
const router = express.Router()







router.get('/', (req, resp) => {
    resp.json({info: 'teste'})
})


router.get('/users/salariogreater', findSalaryGreater)
router.get('/users/salariolower', findSalaryLower)
router.get('/users/gender', findBySex)
router.post('/users', createUser)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUser)
router.get('/users', getUsers)

router.post('/product', createProduct)
router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product', getProducts)

module.exports = router