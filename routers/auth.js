import { Router } from "express";
import { signin, signup } from "../controllers/auth";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();


router.post("/signup", checkAuth, signup);
router.post("/signin", checkAuth, signin)


export default router;
