const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  address2: { type: String, required: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
