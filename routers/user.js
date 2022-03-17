import { Router } from "express";
import { signin, signup } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();


router.post('/signup', checkAuth, signup);
router.get('/signin', checkAuth, signin)


export default router;
