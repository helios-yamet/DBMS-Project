const getReportcard = (knex) => (req, res) => {
    const { id,year } = req.body;

    knex('Report Card')
        .select('Teacher comments','Subject_Grade','Departments.Subject')
        .join('Departments','Report Card.Subject ID','=','Departments.Subject ID')
        .where('Student ID', '=', id).andWhere('Academic Year','=',year)
        .then(card => res.json(card))
        .catch(err => console.log(err));
}

module.exports = {
    getReportcard: getReportcard
};