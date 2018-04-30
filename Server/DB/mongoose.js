const mongoose = require('mongoose');

const uri = 'mongodb+srv://iaansanity:arianabentir@nodedb-h8kp5.mongodb.net/Library';

mongoose.connect(uri);

module.exports = {
	mongoose
}

