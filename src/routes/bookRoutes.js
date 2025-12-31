import express from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, searchBooks} from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', getAllBooks);

router.get('/books/:id', getBookById);

router.post('/books', createBook);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);

router.get('/books-search', searchBooks);

export default router;