const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = mongoose.model('Note', NoteSchema);