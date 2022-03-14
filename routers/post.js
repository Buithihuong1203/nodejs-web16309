import { Router } from "express";
import { creat, list, read, remove, update } from "../controllers/post";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();
//resful API
router.get('/posts', checkAuth, list);
router.get('/post/:id', checkAuth, read);
router.post('/posts', checkAuth, creat);
router.delete('/post/:id', checkAuth, remove);
router.patch('/post/:id', checkAuth, update);

export default router;