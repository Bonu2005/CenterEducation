import {activateAcc, register, login, findAll, findOne, findBySearch, create, remove, update} from "../controllers/user.controller.js";
import {Router} from "express";
import upload from "../multer/multer.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyRole from "../middlewares/verifyRole.js";
import verifySelf from "../middlewares/verifySelf.js"

let userRouter = Router();

userRouter.post("/register", upload.single("image"), register);
userRouter.get("/activate/:email", activateAcc);
userRouter.post("/login", login);
userRouter.get("/users", verifyToken, findAll);
userRouter.get("/user/:id", verifyToken, verifyRole(["admin"]), findOne);
userRouter.get("/user", verifyToken, verifyRole(["admin"]), findBySearch);
userRouter.post("/user", verifyToken, verifyRole(["admin"]), upload.single("image"), create);
userRouter.delete("/user/:id", verifyToken, verifyRole(["admin"]), remove);
userRouter.patch("/user/:id", verifyToken, verifySelf(["admin"]), upload.single("image"), update);

export default userRouter;