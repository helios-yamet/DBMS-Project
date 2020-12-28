handleVolunteer = (knex) => (req, res) => {
    console.log("volunteer request initiated");
    const { firstName,
        lastName,
        email,
        phone,
        area1,
        area2,
        area3,
        area4,
        from,
        to } = req.body;

    console.log(area1, area2);
    const name = `${firstName} ${lastName}`;
    var areas = '';
    var dates = '';

    if(!area2 && !area3 && !area4)
        areas = `${area1}`;
    else if (!area3 && !area4)
        areas = `${area1}, ${area2}`;
    else if (!area4)
        areas = `${area1}, ${area2}, ${area3}`;
    else
        areas = `${area1}, ${area2}, ${area3}, ${area4}`;

    if (!from && !to)
        dates = `Not Specified`;
    else if (!from)
        dates = `NIL to ${to}`;
    else if (!to)
        dates = `${from} to NIL`;
    else
        dates = `${from} to ${to}`;

    if (!name || !email || !phone)
        return res.status(400).json("Please enter all the required details.");

    // INCREMENT NUMBER OF TIMES USER VOLUNTEERED
    knex('users')
        .returning('*')
        .where('email', '=', email)
        .increment({
            'numvolunteered': 1,
            'points': 350
        })
        .then(user => console.log(user[0]));

    // ENTER DETAILS IN THE VOLUNTEERS TABLE
    knex('volunteers')
        .returning('*')
        .insert({
            name: name,
            email: email,
            phone: phone,
            areas: areas,
            dates: dates
        })
        .then(volunteer => {
            console.log("Volunteered", volunteer[0]);
            res.json(volunteer[0]);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Unable to register volunteer");
        });
}

module.exports = {
    handleVolunteer: handleVolunteer
}