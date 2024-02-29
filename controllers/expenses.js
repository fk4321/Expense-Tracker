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
        //validations 
        if ( !title || !date || !category || !description ) {
            return res.status(400).json({message: "All fields are required"})
        }
        if ( amount <= 0 || !amount === "number" ) {
            return res.status(400).json({message: "Enter a positive amount and Make sure it is a number"})
        }
       expense.save() 
       res.status(200).json({message: "Expense Added"})
   } catch (error) {
        res.status(500).json({message: "Server Error"})
   }
}

// get expense
const getExpense = async(req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json({expense})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}

// delete expense 
const deleteExpense = async (req,res) => {
    console.log(req.params)
    const {id} = req.params
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'expense deleted'})
        }) 
        .catch((error)=>{
            res.status(500).json({message: 'Server Error'})
        }) 
}

module.exports = {
    addExpense, getExpense, deleteExpense
}