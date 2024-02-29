const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGO_URL = 'mongodb+srv://felixbiwott144:UpQud1OwRay9RAbc@cluster0.iypdqpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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