const router = require('express').Router()
const { addIncome, getIncome, deleteIncome } = require('../controllers/income')

router.get('/', async(req, res) => {res.send("Hello World")})
router.post('/add-income', addIncome)
router.get('/get-incomes', getIncome)
router.delete('/delete-income/:id', deleteIncome)

module.exports = router 