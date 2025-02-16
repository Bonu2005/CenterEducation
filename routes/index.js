import { Router } from "express";
import userController from "./user.routes.js";
import lessonController from "./lesson.routes.js";
import courseController from "./course.routes.js";
import commentController from "./comment.routes.js";
import categoryRouter from "./category.routes.js";

const mainRouter= Router()

mainRouter.use("/user",userController)
mainRouter.use("/lesson",lessonController)
mainRouter.use("/course",courseController)
mainRouter.use("/comment",commentController)
mainRouter.use("/category",categoryRouter)

export default mainRouter