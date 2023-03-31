const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

const port = 3000;
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'./index.html'));
})


app.post('/senddata', (req, res) => {
	var email = (req.body.email);
	var password = (req.body.password);
	

	var mod_spawn = require("child_process").spawn;		
	var process = mod_spawn('python',["./validate.py",email, password] ); 

	process.stdout.on('data', function(data) {

		if(data.toString().indexOf("ERROR")>= 0){

			console.log("ERROR OCCURED" + data)
			res.write(data);
			res.end();

		}
		else{

			console.log("ResultFromPython :\n"+data);

			res.write(data);
			res.end();

		}
	})

});

app.listen(port, () => console.log('App is listening on port '+port+':'));