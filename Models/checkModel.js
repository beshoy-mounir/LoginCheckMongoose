const mongoose = require('mongoose');
const checkSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username Is Required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password Is Required'],
  },
});
const Users = mongoose.model('user', checkSchema);
module.exports = Users;
