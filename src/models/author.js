import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    birthYear: {
        type: Number,
        required: true,
        min: 0,
    },
    bio: {
        type: String,
        required: true,
        minLength: 10,
    },
    genres: {
        type: [String],
        required: true,
        validate: {
            validator: function(arr) {
                return arr.length > 0;
            },
            message: 'Auteur moet minstens 1 genre hebben'
        }
    },
});

//Zoekfunctie
authorSchema.index({
    name: 'text',
    genres: 'text',
});

export default mongoose.model('Author', authorSchema);
