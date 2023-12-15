const { catchError } = require("../Middleware/CatchError");
const ComprehensionQuestion = require("../Models/ComprehensionQuestionModel");
const ErrorHandler = require("../Utils/ErrorHandler");

exports.createComprehensionQuestion = catchError(async (req, res, next) => {
     const {
          passage,
          media,
          points,
          mcqQuestions,
          mcaQuestions,
          shortAnswerQuestions
     } = req.body;

     const newQuestion = new ComprehensionQuestion({
          passage,
          media,
          points,
          mcqQuestions: JSON.parse(mcqQuestions),
          mcaQuestions: JSON.parse(mcaQuestions),
          shortAnswerQuestions: JSON.parse(shortAnswerQuestions),
     });

     // Save the new comprehension question to the database
     const savedQuestion = await newQuestion.save();
     res.status(201).json({ success: true, savedQuestion });
});


exports.getComprehensionQuestions = catchError(async (req, res, next) => {
     const questions = await ComprehensionQuestion.find();
     res.status(200).json({ success: true, message: 'Comprehension Questions', questions });
});


exports.deleteComprehensionQuestionById = catchError(async (req, res, next) => {
     const { questionId } = req.params;
     const deletedQuestion = await ComprehensionQuestion.findByIdAndDelete(questionId);
     if (!deletedQuestion) {
          return next(new ErrorHandler('Question not found', 404));
     }
     res.status(200).json({ message: 'Comprehension question deleted successfully' });
});