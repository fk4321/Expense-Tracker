const ExpenseSchema = require('../models/ExpenseModel')
// add expense
const addExpense = async (req, res) => {
   const { title, date, amount, category, description } = req.body

   const expense = ExpenseSchema ({
    title,
    date,
    amount, 
    category,
    description
   })
   try {
       expense.save() 
       res.status(200).json({message: "Expense Added"})
   } catch (error) {
        res.status(500).json({message: "Server Error"})
   }
}
// get expense
// delete expense 
module.exports = {
    addExpense
}