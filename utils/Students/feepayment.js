const getFees = (knex) => (req, res) => {
    const { id,grade,section } = req.body;

    knex('Students')
        .select('Fee paid')
        .where('Student ID', '=', id)
        .then(function(paid){
            knex('Fees')
            .select('Fees')
            .where('Grade','=',grade)
            .andWhere('Section','=',section)
            .then(fees=>res.json({status:paid[0],fees:fees[0]}))
            .catch(console.log("cant fetch fees"))
        })
        .catch(err => res.status(400).json("Cant fetch fee status"));
}

module.exports = {
    getFees: getFees
};