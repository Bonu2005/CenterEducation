import express from "express"
import { config } from "dotenv"
import sequelize from "./config/db.js"
config()
const app = express()
app.use(express.json())
async function connectDb() {
    
    try {
        await sequelize.sync({force:true})
        console.log("connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

connectDb()
app.listen(process.env.PORT,()=>{
    console.log(`server is run port:${process.env.PORT}`);
    
})