var {MongoClient,ObjectID} = require('mongodb');

var uri = "mongodb+srv://iaansanity:arianabentir@nodedb-h8kp5.mongodb.net/Library";

MongoClient.connect(uri, function(err, client) {
   const db = client.db('Library');
   
   db.collection('Users').insertOne({
   	name: 'Ian Miranda',
   	username: 'iaansanity',
   	password: 'iaansanity'
   }, (err,res)=>{
   	if(err)
   		return console.log('Error. Log:', err);
   	
   	console.log(JSON.stringify(res.ops));
   })
   
   client.close();
});

