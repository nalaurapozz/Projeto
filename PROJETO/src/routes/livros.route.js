import { Router } from 'express';
const router = Router();
import { create, findAll, findById } from "../controllers/livros.controller.js"
import { authMiddleware } from '../middlewares/auth.middleware.js';

router.post("/", authMiddleware, create)
router.get("/", findAll)

router.get("/:id", findById)


export default router;