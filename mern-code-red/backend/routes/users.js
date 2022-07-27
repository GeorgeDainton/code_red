const router = require('express').Router();
const { find } = require('../models/user.model');
let User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const { SECRET = 'secret' } = process.env;

router.route('/').get((req, res) => {
  User.find() // built in mongoose method
    .then(todo => res.json(todo)) //if successful, take the res(ult) whcih can be called anything, and send it as json
    .catch(err => res.status(400).json('Error: ' + err)); //in error, send as json
})

router.route('/add').post(async (req, res) => {
    try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    // send new user as response
    res.json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.route('/login').post(async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = await jwt.sign({ username: user.username }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: 'Password incorrect' });
      }
    } else {
      res.status(400).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;