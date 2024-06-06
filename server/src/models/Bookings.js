// src/models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    destination: {
        type: String, // Assuming destination ID is a string
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    seatClass: {
        type: String,
        required: true,
        enum: ['Business', 'First', 'Economy'],
    },
    from: {
        type: String,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
