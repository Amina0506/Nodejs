import express from 'express';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor, searchAuthors} from '../controllers/authorController.js';

const router = express.Router();

router.get('/authors', getAllAuthors);

router.get('/authors/:id', getAuthorById);

router.post('/authors', createAuthor);

router.put('/authors/:id', updateAuthor);

router.delete('/authors/:id', deleteAuthor);

router.get('/authors-search', searchAuthors);

export default router;