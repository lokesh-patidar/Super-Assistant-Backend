const mongoose = require('mongoose');


// Define the options schema for MCQ and MCA questions
const OptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    default: false
  }
});



const MCQQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [OptionSchema] // Array of options (OptionSchema)
});



// Define the schema for MCA questions
const MCAQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [OptionSchema] // Array of options (OptionSchema)
});



// Define the schema for the comprehension question
const ComprehensionQuestionSchema = new mongoose.Schema({
  passage: {
    type: String,
    required: true
  },
  mcqQuestions: [MCQQuestionSchema], // Array of MCQ questions
  mcaQuestions: [MCAQuestionSchema], // Array of MCA questions
  shortAnswerQuestions: [{
    questionText: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  }] // Array of short answer questions
});

const ComprehensionQuestion = mongoose.model('ComprehensionQuestion', ComprehensionQuestionSchema);

module.exports = ComprehensionQuestion;
