const express = require('express');
const { createComprehensionQuestion, deleteComprehensionQuestionById, getComprehensionQuestions } = require('../Controller/ComprehensionQuestionController');
const comprehensionQuestionRoutes = express.Router();

comprehensionQuestionRoutes.post('/api/v1/add-comprehension-question', createComprehensionQuestion);
comprehensionQuestionRoutes.get('/api/v1/comprehension-question/:questionId', deleteComprehensionQuestionById);
comprehensionQuestionRoutes.delete('/api/v1/get-comprehension-questions', getComprehensionQuestions);

module.exports = comprehensionQuestionRoutes;