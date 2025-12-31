import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from "./routes/authorRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

//Routes
app.use('/api', bookRoutes);
app.use('/api', authorRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('test')
        app.listen(3000, () => console.log('Server staat op poort 3000'));
    })
    .catch(err => console.log(err));
