const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');

// connect to database 
const dbNew = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log("DB Connection error")
    }
}

module.exports = {dbNew}