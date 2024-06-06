// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import Booking from './models/Booking.js';

const app = express();
const port = 5000;

connectDB();

app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
