const router = require('express').Router();
let Todo = require('../models/todo.model')

router.route('/').get((req, res) => {
  Todo.find() // built in mongoose method
    .then(potatoes => res.json(potatoes)) //if successful, take the res(ult) whcih can be called anything, and send it as json
    .catch(err => res.status(400).json('Error:' + err)); //in error, send as json
})

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const catagory = req.body.catagory;
  const priority = Number(req.body.priority);
  const date = Date.parse(req.body.date);
  const deadline = Date.parse(req.body.deadline);

  const newTodo = new Todo({
    username,
    description,
    catagory,
    priority,
    date,
    deadline,
  });

  newTodo.save()
    .then(() => res.json('To Do added'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;