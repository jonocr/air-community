const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Stretch Feature
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  location: {type: String, required: true},
  status: {type: String, required: true, default: 'active'}
});

module.exports = mongoose.model('User', userSchema);