const mongoose = require( process.cwd() + '/server/db/mongoose');
const Users = require( process.cwd() + '/server/models/Users');

const RunUserFunction = function(data)
{
	return new Promise((resolve,reject)=>{
		if(data.method=='INSERT')
		{
			var User = new Users({
			  name: data.name
			});

			User.save().then((res)=>{
				resolve(res);
			},(e)=>{
				reject(e);
			})
		}
		else if(data.method=='GET_LIST')
		{
			Users.find().then((res)=>{
				resolve(res);
			},(e)=>{
				reject(e);
			})
		}
	})
}

module.exports = {
	RunUserFunction
}
