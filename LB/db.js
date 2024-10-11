import mongoose from "mongoose"

const  Mongo_URL = process.env.MONGODB_URL

// db connection
const connect = async() =>{
    try {
        
mongoose.connect(Mongo_URL, {dbName: 'nextjs-app'})
.then(()=> console.log('connected to mongodb'))
.catch((err) =>console.erorr('err'))

    } catch (err) {
        console.log("Error:", err);
        throw new Error("Error:" + err)
    }
}
export default  connect
