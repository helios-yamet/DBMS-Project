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


    
})


const server = http.createServer(app)
server.listen(3000)