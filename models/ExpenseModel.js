const { default: mongoose } = require("mongoose");

const Expense_Schema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    amount: {
        type: Number
    },
    category: {
        type: String,
        default: "Expense"
    },
    description: {
        type: String
    }
})

const ExpenseSchema = mongoose.model('expense', Expense_Schema)

module.exports = ExpenseSchema 

