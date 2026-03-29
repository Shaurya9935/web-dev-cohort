import mongoose from "mongoose";

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // What is inside this conn
    console.log(`MongoDb connected: ${conn.connection.host}`)
}

export default connectDB;