import Book from '../models/book.js';

//Functie om alle boeken op te halen
export const getAllBooks = async (req, res) => {
    try{
        const limit = parseInt(req.query.limit)||5;
        const offset = parseInt(req.query.offset)||0;
        const sortBy = req.query.sortBy || null;

        let query = Book
            .find()
            .populate('author')
            .skip(offset)
            .limit(limit);

        //Sorteren
        if(sortBy){
            query = query.sort(sortBy);
        }

        const books = await query;

        res.json(books);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
};

//Functie om 1 boek op te halen
export const getBookById = async (req, res) => {
    try{
        const book = await Book
            .findById(req.params.id)
            .populate('author');

        if(!book){
            return res.status(404).json({ message: 'Boek niet gevonden' });
        }

        res.json(book);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
};

//Functie om een nieuw boek toe te voegen
export const createBook = async (req, res) => {
    const { title, author, year, genre, content } = req.body;
    const book = new Book({ title, author, year, genre, content });

    try{
        const newBook = await book.save();
        const populatedBook = await newBook.populate('author');

        res.status(201).json(populatedBook);
    } catch (err){
        res.status(400).json({ message: err.message });
    }
};

//Functie om boek up te daten
export const updateBook = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({ message: 'Boek niet gevonden' });
        }

        if (req.body.authorId) book.author = req.body.authorId;

        Object.assign(book, req.body);
        const updatedBook = await book.save();
        const populatedBook = await updatedBook.populate('author');
        res.json(populatedBook);
    } catch (err){
        res.status(400).json({ message: err.message });
    }
};

//Functie om boek te verwijderen
export const deleteBook = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({ message: 'Boek niet gevonden' });
        }

        await book.remove();
        res.json({ message: 'Boek is verwijderd' });
    } catch (err){
        res.status(500).json({ message: err.message });
    }
};

export const searchBooks = async (req, res) => {
    const {query} = req.query;
    try{
        //Extra feature - zoekfunctie
        const queryRegx = new RegExp(query, 'i');

        const books = await Book
            .find({
                $or: [
                    { title: { $regex: queryRegx } },
                ],
            })
            .populate('author');
        res.json(books);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};