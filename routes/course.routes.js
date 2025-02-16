import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/course.controller.js";

const courseController = Router()
courseController.get("/",findAll)
courseController.get("/:id",findOne)
courseController.get("/:page/:take",Pagination)
courseController.get("/search",findByQuery)
courseController.post("/",create)
courseController.patch("/:id",update)
courseController.delete("/",remove)

export default courseController