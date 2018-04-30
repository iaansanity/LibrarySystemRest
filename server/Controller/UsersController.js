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
				resolve({
					status:1,
					message: 'Successfully added a user.'
				});
			},(e)=>{
				reject(e);
			})
		}
		else if(data.method=='GET_LIST')
		{
			Users.find().then((res)=>{
				resolve(res);
			},(e)=>{
				reject({
					status:0,
					message:'Failed to fetch users.'
				});
			})
		}
		else
			reject({
				status:0,
				message:'Method not found.'
			})
	})
}

module.exports = {
	RunUserFunction
}
