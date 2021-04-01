const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Stretch Feature
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  location: {type: String, required: true},
  status: {type: String, required: true, default: 'active'}
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
  return next();
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);