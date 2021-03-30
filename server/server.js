const express = require('express');
const app = express();
const mongoose = require('mongoose');

const apiUsers = require('./routes/apiUsers');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = 'mongodb+srv://codesmith:s0lOprojec7@cluster0.l6e2x.mongodb.net/air_community?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//Routes
app.use('/users', apiUsers);

app.use('/', (req, res) => {
  res.status(200).send('Houston, the satellite is in orbit!');
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});