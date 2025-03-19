const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();

router.post('/', async (req, res) => {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.json(quiz);
});

router.get('/', async (req, res) => {
    const quizzes = await Quiz.find().populate('creator');
    res.json(quizzes);
});

module.exports = router;