const mongoose = require('mongoose');

const ClozeQuestionSchema = new mongoose.Schema({
     questionType: {
          type: String,
          default: 'Cloze',
     },
     questionText: {
          type: String,
          required: [true, 'Question text is required!'],
     },
     media: {
          type: String // Adjust this field for media information
     },
     options: [String],
     points: {
          type: Number,
          default: 0 // You can adjust the default value as needed
     },
     feedback: String,
}, { timestamps: true });

const ClozeQuestion = mongoose.model('ClozeQuestion', ClozeQuestionSchema);

module.exports = ClozeQuestion;
