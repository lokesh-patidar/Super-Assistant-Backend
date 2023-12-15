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
     points: {
          type: Number,
          default: 0,
     },
     options: [{
          name: {
               type: String,
               required: [true, 'Name is required!'],
          },
          category: {
               type: String,
               required: [true, 'Category is required!'],
          },
     }],
}, { timestamps: true });

const CategoryQuestion = mongoose.model('CategoryQuestion', CategoryQuestionSchema);

module.exports = CategoryQuestion;
