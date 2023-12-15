const { catchError } = require("../Middleware/CatchError");
const CategoryQuestion = require("../Models/CategoryQuestionModel");
const ErrorHandler = require("../Utils/ErrorHandler");

exports.createCategoryQuestion = catchError(async (req, res, next) => {
     const { questionText, media, categories, options, points } = req.body;

     const newCategoryQuestion = new CategoryQuestion({
          questionText,
          media,
          categories: categories.split(","),
          options: JSON.parse(options),
          points,
     });

     const savedCategoryQuestion = await newCategoryQuestion.save();
     res.status(201).json({ success: true, savedCategoryQuestion });
});


exports.getCategoryQuestions = catchError(async (req, res, next) => {
     const questions = await CategoryQuestion.find();
     res.status(200).json({ success: true, message: 'Category Questions', questions });
});


exports.deleteCategoryQuestionById = catchError(async (req, res, next) => {
     const { questionId } = req.params;
     const deletedQuestion = await CategoryQuestion.findByIdAndDelete(questionId);
     if (!deletedQuestion) {
          return next(new ErrorHandler('Question not found', 404));
     }
     res.status(200).json({ message: 'Category question deleted successfully' });
});