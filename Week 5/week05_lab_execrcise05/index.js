const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
let fs = require("fs");

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => 
{
  res.sendFile(__dirname + "/home.html");
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => 
{
  fs.readFileSync(__dirname + "/user.json", "utf-8", (error, data) => 
  {
    if(error)
  {
    throw error;
  }
  else
  {
    res.write(data);
    res.write(data);
  }
  })
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => 
{
  let user = req.query.username;
  let pass = req.query.password;
  
  let userData = require("./user.json");

  if(user === userData.username && pass == userData.password)
  {
    ans = 
    {
      status: true,
      message: "User is valid!"
    }
    res.send(ans);
  }
  if(user != userData.username && pass == userData.password)
  {
    ans = 
    {
      status: false,
      message: "User name is invalid!"
    }
    res.send(ans);
  }
  if(user == userData.username && pass != userData.password){}
  {
    ans = 
    {
      status: false,
      message: "Password"
    }
    res.send(ans);
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => 
{
  let username = req.params.username;
  res.send(`<b>${username}Successfully Logout!</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));