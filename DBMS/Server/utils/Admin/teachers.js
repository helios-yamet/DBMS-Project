const getTeachers = (knex) => (req, res) => {

    knex('Subjects')
        .returning('*')
        .then(canteen => res.json(canteen[0]))
        .catch(err => res.status(400).json("Cannot access table"));
}


module.exports = {
    getTeachers:getTeachers
}
