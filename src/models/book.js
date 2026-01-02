import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 0,
    },
    genre: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 5,
    }
});

//Zoekfunctie
bookSchema.index({
    title: 'text',
    content: 'text',
});

export default mongoose.model('Book', bookSchema)
