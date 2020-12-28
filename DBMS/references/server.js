var express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'test',
        database: 'feelgreen'
    }
});

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const donate = require('./controllers/donate');
const volunteer = require('./controllers/volunteer');
const profile = require('./controllers/profile');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>  res.json('Server is running'));
app.post("/signin", signin.handleSignin(knex, bcrypt));
app.post("/register", register.handleRegister(knex, bcrypt));
app.post("/donate", donate.handleDonation(knex));
app.post("/volunteer", volunteer.handleVolunteer(knex));
app.get("/profile/:id", profile.handleProfile(knex));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}.`);
});
