import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/lesson.controller.js";

const lessonController = Router()
lessonController.get("/",findAll)
lessonController.get("/:id",findOne)
lessonController.get("/:page/:take",Pagination)
lessonController.get("/search",findByQuery)
lessonController.post("/",create)
lessonController.patch("/:id",update)
lessonController.delete("/",remove)

export default lessonController