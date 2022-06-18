import { Router } from "express";
import { list, signin, signup } from "../controllers/auth";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", list);


export default router;