const express = require('express')
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

module.exports = router