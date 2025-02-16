import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/comment.controller.js";

const commentController = Router()
commentController.get("/",findAll)
commentController.get("/:id",findOne)
commentController.get("/:page/:take",Pagination)
commentController.get("/search",findByQuery)
commentController.post("/",create)
commentController.patch("/:id",update)
commentController.delete("/",remove)

export default commentController