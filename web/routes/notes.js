const express = require('express');
const router = express.Router();
const Note = require('../../models/note');
// Application logger
const logger = require('../../config/logger.config');

// Get all notes
router.get('/', async (req, res) => {
    logger.info("Hago un GET!")
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (ex) {
        res.status(500).json({ message: ex.message })
    }
});

// Get one note
router.get('/:id', async (req, res) => {
});

// Create one note
router.post('/', async (req, res) => {
    console.log('body=>'+JSON.stringify(req.body));
    const note = new Note({
        name: req.body.name,
        content: req.body.content
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (ex) {
        res.status(400).json({ message: ex.message });
    }
});

// Update one note
router.patch('/:id', async (req, res) => {
});

// Delete one note
router.delete('/:id', async (req, res) => {
});

module.exports = router;