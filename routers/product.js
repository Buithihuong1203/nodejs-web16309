import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAuth, requiredSignin } from '../middlewares/checkAuth'
//import { checkAuth } from '../middlewares/checkAuth';
const router = Router();

//resful API
router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', create);
router.delete('/products/:id', remove);
router.patch("/products/:id", update);

router.param("userId", userById);

export default router;