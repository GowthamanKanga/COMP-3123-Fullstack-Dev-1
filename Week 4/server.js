/*
Create a ZIP file having the name StudentID_COMP3123-exec04.zip. Also, upload screenshots showing output or any errors.
Create express JS application having name StudentID_COMP3123-exec04
Add the express framework and nodemon to package.json
Create routes as follow 
GET request: /hello return "Hello Express JS"
GET request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use Querystring to send values
POST request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use path parameter to send values

Upload ZIP file, git repository, and screenshots of the postman
*/

const express = require("express");

const app = express();

const SERVER_PORT = 8088;


app.get("/hello", (req,res) => 
{
    res.send(" Hello Express JS");
});

app.get("/user", (req, res) =>
{
    res.send
    ({
        firstName: "Gowthaman",
        lastName: "Kangatharan"
    });
});

//http://localhost:8088/user/Gowthaman/Kangatharan
app.post("/user/:firstname/:lastname", (req,res) =>
{
    const firstName = req.params.firstname;
    const lastName = req.params.lastname;


    res.send(
        {
            firstName,
            lastName
        });
});

app.listen(SERVER_PORT, () => 
{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
