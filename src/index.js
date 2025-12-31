import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('test')
        app.listen(3000, () => console.log('Server staat op poort 3000'));
    })
    .catch(err => console.log(err));
