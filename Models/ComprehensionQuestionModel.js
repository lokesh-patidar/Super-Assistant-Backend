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
  points: {
    type: Number,
    default: 0,
  },
  options: [OptionSchema] // Array of options (OptionSchema)
});



// Define the schema for MCA questions
const MCAQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0,
  },
  options: [OptionSchema] // Array of options (OptionSchema)
});



// Define the schema for the comprehension question
const ComprehensionQuestionSchema = new mongoose.Schema({
  passage: {
    type: String,
    required: true
  },
  media: {
    type: String // Adjust this field for media information
  },
  points: {
    type: Number,
    default: 0,
  },
  mcqQuestions: [MCQQuestionSchema], // Array of MCQ questions
  mcaQuestions: [MCAQuestionSchema], // Array of MCA questions
  shortAnswerQuestions: [{
    points: {
      type: Number,
      default: 0,
    },
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
