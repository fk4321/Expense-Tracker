const { default: mongoose } = require("mongoose");

const Expense_Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, 
        maxLength: 50
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        masLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    }
}, {timestamps: true})

const ExpenseSchema = mongoose.model('expense', Expense_Schema)

module.exports = ExpenseSchema 

