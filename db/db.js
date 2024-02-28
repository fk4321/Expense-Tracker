const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGO_URL = 'mongodb+srv://felixbiwott144:UpQud1OwRay9RAbc@cluster0.iypdqpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const dbNew1 =  async () => {

    const client = new MongoClient(MONGO_URL, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
        });
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// dbNew1().catch(console.dir);

// connect to database 
const dbNew = async () => {
    try {
        // mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URL)
        // mongoose.connect('mongodb://localhost:8000/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('DB Connected')
    } catch (error) {
        console.log("DB Connection error")
    }
}

module.exports = {dbNew}