const IncomeSchema = require('../models/IncomeModel.js') 

// add income method 
exports.addIncome = async (req, res) => {
    const {title, amount, date, category, description} = req.body

    const income = IncomeSchema({
        title,
        amount,
        date,
        category, 
        description
    })

    try{ 
        // validations
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be postive'})
        }
        else {
        // save instance to database
        await income.save()
        res.status(200).json({message: 'income successfully added'})}
    } catch(error){
        res.status(500).json({message: 'Server error'})
    }
}

// get income method 
exports.getIncome = async (req, res) => {
    try {
        // sort to have last created item at the top of the list 
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
}

// delete income method 
exports.deleteIncome = async (req, res) => {
    const {id} = req.params
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Income Deleted"})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error"})
        })
}