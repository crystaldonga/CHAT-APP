import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const connectToMongoDb=async()=>{
    try {
      //console.log(process.env.MONGO_DB_URL);
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to mongodb")
    } catch (error) {
        
        console.log("Error connecting to MongoDb",error.message)
    }
}
export default connectToMongoDb
// const uri = 'mongodb+srv://dongakristal:E3dkfktr2UWahDT1@cluster1.1ljirop.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster1';

// const connectToMongoDb=()=>{mongoose.connect(process.env.MONGO_DB_URL)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Your code logic here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   })};
//   export default connectToMongoDb