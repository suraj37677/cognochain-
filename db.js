const mongoose=require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
const DBurl=process.env.MONGO_URL|| ''
const connectDB=async()=>{
try {
    await mongoose.connect(DBurl).then((data)=>{
        console.log(`database connection successfully ${data.connection.host}`)

    })
} catch (err) {
    console.log(err.message);
    console.log(err);
   
}
}

module.exports=connectDB;