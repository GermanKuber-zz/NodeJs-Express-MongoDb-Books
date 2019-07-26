const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookMOdel = new Schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: {
        type: Boolean,
        default: false
    }
});