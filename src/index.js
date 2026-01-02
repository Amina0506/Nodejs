import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from "./routes/authorRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api', bookRoutes);
app.use('/api', authorRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get(['/endpoints', '/endpoints.html'], (req, res) => {
    res.sendFile(path.join(__dirname, '../endpoints.html'));
});

//Connectie met de database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(3000, () => console.log('Server staat op poort 3000'));
    })
    .catch(err => console.log(err));
