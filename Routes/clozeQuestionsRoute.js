const express = require('express');
const { createClozeQuestion, deleteClozeQuestionById, getClozeQuestions } = require('../Controller/ClozeQuestionController');
const clozeQuestionRoutes = express.Router();

clozeQuestionRoutes.post('/api/v1/add-cloze-question', createClozeQuestion);
clozeQuestionRoutes.get('/api/v1/cloze-question/:questionId', deleteClozeQuestionById);
clozeQuestionRoutes.delete('/api/v1/get-cloze-questions', getClozeQuestions);

module.exports = clozeQuestionRoutes;