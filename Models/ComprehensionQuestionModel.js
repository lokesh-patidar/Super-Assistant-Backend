const mongoose = require('mongoose');

const ComprehensionQuestionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: ['MCA', 'MCQ', 'ShortText'],
    required: true
  },
  media: {
    type: String // Adjust this field for media information
  },
  questionText: {
    type: String,
    required: [true, 'Question text is required!'],
  },
  options: [String], // For MCQ and MCA types to store options
  correctAnswer: String, // For MCQ and MCA to store the correct answer
  // Specific fields for each question type
  // MCA specific fields
  explanation: String, // Explanation for the answer (for MCA)
  // MCQ specific fields
  // Any additional fields specific to MCQ type
  // Short Text specific fields
  maxLength: Number // Maximum length allowed for the answer (for ShortText)
  // Any other specific fields for ShortText type
}, { timestamps: true });

const ComprehensionQuestion = mongoose.model('ComprehensionQuestion', ComprehensionQuestionSchema);

module.exports = ComprehensionQuestion;
