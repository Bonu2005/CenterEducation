import express from "express"
import { config } from "dotenv"
import sequelize from "./config/db.js"
import mainRouter from "./routes/index.js"
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
app.use("/",mainRouter)
connectDb()
app.listen(process.env.PORT,()=>{
    console.log(`server is run port:${process.env.PORT}`);
    
})