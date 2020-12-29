const  getTable =  (knex) => (req, res) => {
    const {table} =req.params

    knex(table)
    .select('*')
    .then(data=>res.json(data))
    .catch(e=>console.log(e))

}


module.exports = {
    getTable:getTable
}
