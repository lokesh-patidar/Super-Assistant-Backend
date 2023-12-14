const express = require('express');
const { createCategoryQuestion, getCategoryQuestions, deleteCategoryQuestionById } = require('../Controller/CategoryQuestionController');
const categoryQuestionRoutes = express.Router();

categoryQuestionRoutes.post('/api/v1/add-category-question', createCategoryQuestion);
categoryQuestionRoutes.get('/api/v1/category-question/:questionId', deleteCategoryQuestionById);
categoryQuestionRoutes.delete('/api/v1/get-category-questions', getCategoryQuestions);

module.exports = categoryQuestionRoutes;