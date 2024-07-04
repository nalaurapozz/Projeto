import { Router } from 'express';
const router = Router();
import { create, findtAll } from "../controllers/livros.controller.js"

router.post("/", create)
router.get("/", findtAll)


export default router;