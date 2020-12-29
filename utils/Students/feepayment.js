const getFees = (knex) => (req, res) => {
    const { id,grade,section } = req.body;
    console.log(id,grade,section)

    knex('Students')
        .select('Fee paid')
        .where('Student ID', '=', id)
        .then(function(paid){
            knex('Fees')
            .select('Fee')
            .where('Grade','=',grade)
            .andWhere('Section','=',section)
            .then(fees=>{res.json({status:paid,fees:fees[0]["Fee"]});console.log(fees)})
            .catch(e=>console.log(e))
        })
        .catch(err =>{console.log(err);res.status(400).json(err)} );
}

module.exports = {
    getFees: getFees
};