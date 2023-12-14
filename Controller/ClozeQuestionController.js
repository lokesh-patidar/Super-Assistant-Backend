const { catchError } = require("../Middleware/CatchError");
const ClozeQuestion = require("../Models/ClozeQuestionModel");
const ErrorHandler = require("../Utils/ErrorHandler");

exports.createClozeQuestion = catchError(async (req, res, next) => {
     const { questionText, media, options, points, feedback } = req.body;

     const newClozeQuestion = new ClozeQuestion({
          questionText,
          media,
          options,
          points,
          feedback,
     });

     const savedClozeQuestion = await newClozeQuestion.save();
     res.status(201).json({ success: true, savedClozeQuestion });
});


exports.getClozeQuestions = catchError(async (req, res, next) => {
     const questions = await ClozeQuestion.find();
     res.status(200).json({ success: true, message: 'Cloze Questions', questions });
});


exports.deleteClozeQuestionById = catchError(async (req, res, next) => {
     const { questionId } = req.params;
     const deletedQuestion = await ClozeQuestion.findByIdAndDelete(questionId);
     if (!deletedQuestion) {
          return next(new ErrorHandler('Question not found', 404));
     }
     res.status(200).json({ message: 'Cloze question deleted successfully' });
});