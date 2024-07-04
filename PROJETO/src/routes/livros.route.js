import { Router } from 'express';
const router = Router();
import { create, findAll, findById, searchByTitle, byUser, update, deleta, like} from "../controllers/livros.controller.js"
import { authMiddleware } from '../middlewares/auth.middleware.js';

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/search", searchByTitle)
router.get("/byUser",authMiddleware,  byUser)
router.get("/:id", authMiddleware, findById)
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, deleta);
router.patch("/like/:id", authMiddleware, like);

export default router;