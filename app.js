const express = require('express');
const bodyParser = require('body-parser');
const router = require(process.cwd() + '/server/Router');
const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use('/api', router);

app.use (function (err, req, res, next){
    if(err)
    		res.send({
    			status:0,
    			message:'Invalid JSON'
    		});
});

app.all('*',(req,res)=>{
	res.send({
		status:0,
		message:'URI not found.'
	});
})

app.listen(port, () => console.log('Example app listening on port ',3000))