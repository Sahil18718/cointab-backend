const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phone: String,
  website: String,
  city: String,
  company: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
