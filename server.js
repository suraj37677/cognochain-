const express =require('express')
const connectDB = require('./db');
const cors=require('cors')
const dotenv=require("dotenv")
const authRoutes =require('./router/authRoutes')
dotenv.config();
const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>welcome to cognochain</h1>")
})

//middleware
app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1/auth",authRoutes)


const PORT=8080;
connectDB();
app.listen(PORT,()=>{
    console.log(`server is working in ${PORT}`)
})

