const IncomeSchema = require('../models/IncomeModel.js')

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category, 
        description,
        date
    })

    try{ 
        // validations
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required'})
        }
        if (amount <= 0 ) {
            return res.status(400).json({message: 'Amount must be postive'})
        }
        // save instance to database
        await income.save()
        res.status(200).json({message: 'income successfully added'})
    } catch(error){
        res.status(500).json({message: 'Server error'})
    }
    console.log(income)
}