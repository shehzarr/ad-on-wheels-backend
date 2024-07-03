const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
