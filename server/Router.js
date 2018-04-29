const router = require('express').Router();
const Users = require( process.cwd() + '/server/controller/UsersController');

router.post('/', (req, res) => {
	if(req.body.module=='USERS')
	{
		Users.RunUserFunction(req.body).then((response)=>{
			res.send({data:response});
		}, (e)=>{
			res.send(e);
		})
	}
});

module.exports = router