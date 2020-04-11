const express = require('express'); //The first line gives you access to the express library by searching your node_modules for "express".
const app = express(); // The first line gives you access to the express library by searching your node_modules for "express".

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






app.listen(8000,function(){
console.log("server is running")
})  //The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)
