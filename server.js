const express = require('express'); //The first line gives you access to the express library by searching your node_modules for "express".
const app = express(); // The first line gives you access to the express library by searching your node_modules for "express".

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.get('/info',function(req,res){
  res.json({
    success:true,
    message:'Info: this is a server, you can make requests from the browser or call it from Postman'

  })
})

app.post('/login',function(req,res){
  // Typically passwords are encrypted using something like bcrypt before sending to database
 	const username=req.body.username;
 	const password=req.body.password;

 // This should come from the database
 	const mockUsername="billyTheKid";
 	const mockPassword="superSecret";

 	if (username===mockUsername && password===mockPassword){
      	// In practice, use JSON web token sign method here to make an encrypted token
        res.json({
      	 	success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
      	})
 	} else {
      	res.json({
      	 	success: false,
      	 	message: 'password and username do not match'
      	})
 	}
})

app.listen(8000,function(){
console.log("server is running")
})  //The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
