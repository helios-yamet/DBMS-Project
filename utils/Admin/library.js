const library = (knex) => (req, res) => {
    

    knex('Library')
        .select('*')
        .then(details => res.json(details[0]))
        .catch(err => res.status(400).json("Could not fetch the data"));
}

module.exports = {
    library: library
};