import Author from '../models/Author.js';

//Functie om alle auteurs op te halen
export const getAllAuthors = async (req, res) => {
    try{
        const limit = parseInt(req.query.limit) || 5;
        const offset = parseInt(req.query.offset) || 0;
        const sortBy = req.query.sortBy || null;

        let query = Author
            .find()
            .skip(offset)
            .limit(limit);

        //Sorteren
        if(sortBy){
            query = query.sort(sortBy);
        }

        const authors = await query;

        res.json(authors);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

//Functie om 1 auteur op te halen
export const getAuthorById = async (req, res) => {
    try{
        const author = await Author.findById(req.params.id);

        if(!author){
            return res.status(404).json({ message: 'Auteur niet gevonden' });
        }

        res.json(author);
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};

//Functie om een nieuwe auteur toe te voegen
export const createAuthor = async (req, res) => {
    const { name, birthYear, bio, genres } = req.body;
    const author = new Author({ name, birthYear, bio, genres });

    try{
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
};

//Functie om auteur te updaten
export const updateAuthor = async (req, res) => {
    try{
        const author = await Author.findById(req.params.id);

        if(!author){
            return res.status(404).json({ message: 'Auteur niet gevonden' });
        }

        Object.assign(author, req.body);
        const updatedAuthor = await author.save();

        res.json(updatedAuthor);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
};

//Functie om auteur te verwijderen
export const deleteAuthor = async (req, res) => {
    try{
        const author = await Author.findById(req.params.id);

        if(!author){
            return res.status(404).json({ message: 'Auteur niet gevonden' });
        }

        await author.remove();
        res.json({ message: 'Auteur is verwijderd' });
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};

//Functie om auteurs te zoeken
export const searchAuthors = async (req, res) => {
    const { query } = req.query;

    try{
        //Extra feature - zoekfunctie
        const queryRegx = new RegExp(query, 'i');

        const authors = await Author
            .find({
                $or: [
                    { name: { $regex: queryRegx } },
                    { genres: { $regex: queryRegx } },
                ],
            })
        res.json(authors);
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};