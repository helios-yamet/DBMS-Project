const librarydues = (knex) => (req, res) => {
    const { id } = req.body;

    knex('Library')
        .returning('Dues')
        .where('Library card Number', '=', id)
        .orWhere('Student ID','=',id)
        .orWhere("Employee ID",'=',id)
        .then(user => res.json(user[0]))
        .catch(err => res.status(400).json("Information not found"));
}

module.exports = {
    librarydues: librarydues
};