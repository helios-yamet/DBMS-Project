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
/*const knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString=process.env.DATABASE_URL,
        ssl=true,

    }
});*/

const signinpage = require('./utils/signin')
const edit = require('./utils/edit')

const student_extracurricular=require('./utils/Students/extracurricular')
const student_fee=require('./utils/Students/feepayment')
const student_lib=require('./utils/Students/librarycard')
const student_report=require('./utils/Students/reportcard')
const student_transport=require('./utils/Students/transport')

const teacher_add_reportcard = require('./utils/Teachers/AddReportcard')
const teacher_get_class=require('./utils/Teachers/GetCassroom')

const admin_canteen=require('./utils/Admin/canteen')
const admin_fees=require('./utils/Admin/fees')
const admin_transport= require('./utils/Admin/transport')
const admin_lib=require('./utils/Admin/library')
const admin_newuser=require('./utils/Admin/newuser')
const admin_teachers=require('./utils/Admin/teachers')
const admin_delete =require('./utils/Admin/deleteUser')

const app= express();

const { Http2ServerRequest } = require("http2");
app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>  res.json('Server is running'));
app.post("/signin", signinpage.handleSignin(knex));
app.post('/admin/add-teacher',admin_teachers.addTeachers(knex))
app.post('/admin/add-canteen',admin_canteen.addCanteen(knex))
app.post('/admin/add-transport',admin_transport.addTransport(knex))
app.post('/admin/add-fees',admin_fees.addFees(knex))
app.post('/admin/new-user',admin_newuser.Adduser(knex))
app.post('/admin/delete-user',admin_delete.DeleteUser(knex))
app.post('/admin/edit-details',edit.Edituser(knex))
app.get('/admin/view-teacher',admin_teachers.getTeachers(knex))
app.get('/admin/view-canteen',admin_canteen.getCanteen(knex))
app.get('/admin/view-transport',admin_transport.getTransport(knex))
app.get('/admin/view-fees',admin_fees.getFees(knex))
app.get('/admin/library',admin_lib.library(knex))

app.post('/teacher/add-reportcard',teacher_add_reportcard.AddReportCard(knex))
app.get('/teacher/classroom',teacher_get_class.GetClassroom(knex))

app.get('/student/extracurricular',student_extracurricular.getExtraCurricular(knex))
app.post('/student/fees',student_fee.getFees(knex))
app.post('/student/library',student_lib.getLibrarydues(knex))
app.post('/student/reportcard',student_report.getReportcard(knex))
app.post('/student/transport',student_transport.getTransport(knex))

app.listen(process.env.PORT||3001)