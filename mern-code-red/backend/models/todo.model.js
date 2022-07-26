const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  catagory: { type: String, required: false },
  priority: { type: Number, required: true },
  date_posted: { type: Date, required: true},
  deadline: { type: Date, required: false},
  },  {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo