handleDonation = (knex) => (req, res) => {
    console.log("donation request initiated");
    const { firstName, 
            lastName,
            email,
            phone,
            addr,
            addr2,
            city,
            district,
            zipcode,
            state,
            from,
            to } = req.body;

    const name = `${firstName} ${lastName}`;
    const address = `${addr}, ${addr2}, ${city}, ${district}, ${state}, ${zipcode}`;
    var dates = '';

    if(!from && !to)
        dates = `Not Specified`;
    else if(!from)
        dates = `NIL to ${to}`;
    else if(!to)
        dates = `${from} to NIL`;
    else
        dates = `${from} to ${to}`;

    if (!name || !email || !address || !phone)
        return res.status(400).json("Please enter all the required details.");

    // INCREMENT NUMBER OF DONATIONS BY THIS USER
    knex('users')
        .returning('*')
        .where('email', '=', email)
        .increment({
            'numofdonations': 1,
            'points': 250
        })
        .then(user => console.log(user[0]));

    // ENTER DETAILS IN THE DONATIONS TABLE
    knex('donations')
        .returning('*')
        .insert({
            name: name,
            email: email,
            phone: phone,
            address: address,
            dates: dates
        })
        .then(donation => {
            console.log("Donated", donation[0]);
            res.json(donation[0]);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Unable to file donation");
        });
    
    // knex('users')
    //     .returning('*')
    //     .insert({
    //         name: name,
    //         email: email,
    //         hash: hash
    //     })
    //     .then(user => { console.log('Registered:', user[0]); res.json(user[0]); })
    //     .catch(err => { console.log(err); res.status(400).json("Unable to register"); });
}

module.exports = {
    handleDonation: handleDonation
}