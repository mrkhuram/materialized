var mongoose = require('mongoose');

// User Schema
var User = mongoose.model('users', {
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
});

module.exports = User;