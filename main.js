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

