const router = require('express').Router();
let Todo = require('../models/todo.model')

router.route('/').get((req, res) => {
  Todo.find() // built in mongoose method
    .then(todo => res.json(todo)) //if successful, take the res(ult) whcih can be called anything, and send it as json
    .catch(err => res.status(400).json('Error: ' + err)); //in error, send as json
})

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const catagory = req.body.catagory;
  const priority = Number(req.body.priority);
  const date = Date.parse(req.body.date);
  // const deadline = Date.parse(req.body.deadline);

  const newTodo = new Todo({
    username,
    description,
    catagory,
    priority,
    date,
    // deadline,
  });

  newTodo.save()
    .then(() => res.json('To Do added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id) //not req.body as this is input by the user, params are from the URL, using to find by ID
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('To Do deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.username = req.body.username;
      todo.description = req.body.description;
      todo.catagory = req.body.catagory;
      todo.priority = Number(req.body.priority);
      todo.date = Date.parse(req.body.date);
    
      todo.save()
        .then(() => res.json('To Do updated'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;