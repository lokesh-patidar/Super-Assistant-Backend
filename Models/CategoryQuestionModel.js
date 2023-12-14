const mongoose = require('mongoose');

const CategoryQuestionSchema = new mongoose.Schema({
     questionType: {
          type: String,
          default: 'category',
     },
     questionText: {
          type: String,
          required: [true, 'Question text is required!'],
     },
     media: {
          type: String,
     },
     categories: [String],
     options: [{
          name: {
               type: String,
               required: true,
          },
          category: {
               type: String,
               required: true,
          },
     }],
}, { timestamps: true });

const CategoryQuestion = mongoose.model('CategoryQuestion', CategoryQuestionSchema);

module.exports = CategoryQuestion;
