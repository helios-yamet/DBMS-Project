var express = require('express')
const http = require('http')
const bcrypt = require("bcryptjs");
const console =require('console')
const cors = require("cors");
const bodyParser=require("body-parser")
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1234',
        database: 'School'
    }
});


const signinpage = require('./utils/signin')

const app= express();
const { Http2ServerRequest } = require("http2");
app.use(express.json())

app.get("/", (req, res) =>  res.send('<h1>Login:</h1><form action ="/login" method="POST"><h4>First Name</h4><input type="text" id="fname" name="fname"><br><h4>Last Name</h4><input type="text" id="lname" name="lname"><br><button type="submit">Enter</button></form>'));

app.post("/login",(req,res,next)=>{
    console.log(req.body['fname']);
    
    
    
    knex('employee').insert({Names: req.body['fname']}).then(console.log("written")).catch(e=>console.log(e))
    



    res.send('<h1> You logged in</h1><h2>Hello '+req.body['fname'])
    
})


const server = http.createServer(app)
server.listen(3000)