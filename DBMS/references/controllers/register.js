handleRegister = (knex, bcrypt) => (req, res) => {
    console.log("register request initiated");
    const { name, email, password } = req.body;

    if(!name || !email || !password)
        return res.status(400).json("Please enter name, email and password.");

    const hash = bcrypt.hashSync(password);

    knex('users')
        .returning('*')
        .insert({
            name: name,
            email: email,
            hash: hash
        })
        .then(user => { console.log('Registered:', user[0]); res.json(user[0]); })
        .catch(err => { console.log(err); res.status(400).json("Unable to register"); });
}

module.exports = {
    handleRegister: handleRegister
}