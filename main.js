<<<<<<< HEAD
import express from "express";
import { config } from "dotenv";
import sequelize from "./config/db.js";
import userRouter from "./routers/user.router.js";
config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/api", userRouter);

async function connectDb() {
    try {
        await sequelize.sync(); 
        console.log("Connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.log("Database connection error:", error);
    }
}
connectDb();

=======
import express from "express"
import { config } from "dotenv"
import sequelize from "./config/db.js"
import mainRouter from "./routes/index.js"
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger.js"
config()
const app = express()
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
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
>>>>>>> c200e6fcbccd5956d88d12c1238d003f878c6f58
