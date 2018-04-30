const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Users = mongoose.model('Users', new Schema({
    name:  String
  }, {collection: 'Users'})
);

module.exports = Users
