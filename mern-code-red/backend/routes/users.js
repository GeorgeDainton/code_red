const router = require('express').Router();
const { find } = require('../models/user.model');
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find() // built in mongoose method
    .then(todo => res.json(todo)) //if successful, take the res(ult) whcih can be called anything, and send it as json
    .catch(err => res.status(400).json('Error: ' + err)); //in error, send as json
})

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;