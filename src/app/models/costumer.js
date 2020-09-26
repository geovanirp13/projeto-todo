const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costumerSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('Costumer', costumerSchema);