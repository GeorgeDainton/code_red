const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  catagory: { type: String, required: false },
  priority: { type: Number, required: true },
  date: { type: Date, required: true},
  patterned: { type: Boolean, required: true, default: false }
  // deadline: { type: Date, required: false},
  },  {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo