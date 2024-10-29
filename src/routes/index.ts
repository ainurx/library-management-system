import { Router } from "express";

import { createAuthor, findAuhor, deleteAuthor, updateAuthor } from "../controller/authorController";

const router = Router()

router.post('/author', createAuthor)
router.get('/authors', findAuhor)
router.delete('/author/:id', deleteAuthor)
router.put('/author/:id', updateAuthor)

export default router