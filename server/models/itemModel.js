const mongoose = require('mongoose');
const schema = mongoose.Schema;


const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  ownerId: {type: String, required: true},
  renterId: {type: String},
  cost: {type: Number, required: true},
  status: {type: String, required: true, default: 'available'}
});

module.exports = mongoose.model('Item', itemSchema);