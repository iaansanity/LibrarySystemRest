const router = require('express').Router();
const Users = require( './controller/UsersController');

router.post('/', (req, res) => {
	if(!req.body.module)
	{
		res.send({
			status:0,
			message:'No module specified.'
		});
		return 0;
	}

	if(req.body.module=='USERS')
	{
		Users.RunUserFunction(req.body).then((response)=>{
			res.send(response);
		}, (e)=>{
			res.send(e);
		})
	}
	else
	{
		res.send({
			status:0,
			message:'Module not found.'
		})
	}
});

module.exports = router