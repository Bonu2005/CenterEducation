import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/category.controller.js";

const categoryRouter = Router()
categoryRouter.get("/",findAll)
categoryRouter.get("/:id",findOne)
categoryRouter.get("/:page/:take",Pagination)
categoryRouter.get("/search",findByQuery)
categoryRouter.post("/",create)
categoryRouter.patch("/:id",update)
categoryRouter.delete("/",remove)

export default categoryRouter