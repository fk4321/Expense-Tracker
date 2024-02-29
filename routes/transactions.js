const router = require('express').Router()
const { addExpense } = require('../controllers/expenses')
const { addIncome, getIncome, deleteIncome } = require('../controllers/income')

// income routes
router.post('/add-income', addIncome)
router.get('/get-incomes', getIncome)
router.delete('/delete-income/:id', deleteIncome)

// expense routes
router.post('/add-expense', addExpense )

module.exports = router 