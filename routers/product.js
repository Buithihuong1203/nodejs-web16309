import { Router } from 'express';
import { creat, list, read, remove, update } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();


router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products', checkAuth,);
router.patch("/products/:id", checkAuth, update);
router.delete('/products/:id', checkAuth, remove)

export default router;