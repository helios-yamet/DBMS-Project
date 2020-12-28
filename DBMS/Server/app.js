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
const edit = require('./utils/edit')

const student_extracurricular=require('./utils/Students/extracurricular')
const student_fee=require('./utils/Students/feepayment')
const student_lib=require('./utils/Students/librarycard')
const student_report=require('./utils/Students/reportcard')
const student_transport=require('./utils/Students/transport')

const teacher_add_reportcard = require('./utils/Teachers/AddReportcard')
const teacher_get_class=require('./utils/Teachers/GetCassroom')

const {getCanteen,addCanteen}=require('./utils/Admin/canteen')
const {getFees,addFees}=require('./utils/Admin/fees')
const {getTransport,addTransport}= require('./utils/Admin/transport')
const admin_lib=require('./utils/Admin/library')
const admin_newuser=require('./utils/Admin/newuser')
const admin_teacher=require('./utils/Admin/teachers')
const admin_delete =require('./utils/Admin/deleteUser')

const app= express();
const { Http2ServerRequest } = require("http2");
app.use(express.json())



const server = http.createServer(app)
server.listen(3000)