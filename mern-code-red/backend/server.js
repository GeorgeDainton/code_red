const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //middleware

const uri = process.env.ATLAS_URI; //DB URI
mongoose.connect(uri, { useNewUrlParser: true } //removed useCreateIndex as is no longer supported and crashed the server
); //connect to the DB, put flags in the curly braces in to deal with updates to MongoDB

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

app.use('/todos', todosRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
