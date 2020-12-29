const GetMembers = (knex) => (req, res) => {
    const {club}=req.body

    knex('Students')
        .select('First Name','Last Name','Middle Name')
        .join('Part of','Part of.Student','=','Students.Student ID')
        .where('Part of.Club','=',club)
        .then(names => {res.json(names);console.log(names)})
        .catch(err => console.log(err));
}

module.exports = {
    GetMembers: GetMembers
};