import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAuth, requiredSignin } from '../middlewares/checkAuth'
//import { checkAuth } from '../middlewares/checkAuth';
const router = Router();

//resful API
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products/:userId', requiredSignin, isAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update);

router.param("userId", userById);

export default router;