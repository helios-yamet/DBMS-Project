const reportcard = (knex) => (req, res) => {
    const { id,year } = req.body;

    knex('Report Card')
        .select('Teacher comments','Subject_grade','Departments.Subject')
        .join('Departments','Report Card.Subject ID','=','Departments.Subject ID')
        .where('Student ID', '=', id).andWhere('Academic Year','=',year)
        .then(card => res.json(card[0]))
        .catch(err => res.status(400).json("Data not found"));
}

module.exports = {
    reportcard: reportcard
};