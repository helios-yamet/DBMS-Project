const handleSignin = (knex, bcrypt) => (req, res) => { 
    const { email, password } = req.body;
    console.log('signin request initiated', email, password);

    if(!email || !password)
        return res.status(400).json("Please enter email and password");

    knex.select('email', 'hash'). from('users')
        .where('email', '=', email)
        .then(data => {
            console.log(data[0]);
            if(bcrypt.compareSync(password, data[0].hash)) {
                console.log('hello');
                return knex.select('*'). from('users')
                    .where('email', '=', email)
                    .then(user => {
                        console.log(user[0]);
                        res.json(user[0]);
                    })
                    .catch(err => { console.log(err); res.status(400).json("Error logging in"); });
            }
            else 
                res.status(400).json("Incorrect credentials");
        })
        .catch(err => res.status(400).json("User with this email does not exist"));
}


module.exports = {
    handleSignin: handleSignin
};