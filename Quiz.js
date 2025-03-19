const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    title: String,
    questions: [
        { question: String, options: [String], answer: String }
    ],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
