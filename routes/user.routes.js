import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/user.controller.js";

const userController = Router()
userController.get("/",findAll)
userController.get("/:id",findOne)
userController.get("/:page/:take",Pagination)
userController.get("/search",findByQuery)
userController.post("/",create)
userController.patch("/:id",update)
userController.delete("/",remove)

export default userController