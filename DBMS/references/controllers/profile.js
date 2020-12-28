const handleProfile = (knex) => (req, res) => {
    const { id } = req.params;

    knex('users')
        .returning('*')
        .where('id', '=', id)
        .then(user => res.json(user[0]))
        .catch(err => res.status(400).json("User not found"));
}

module.exports = {
    handleProfile: handleProfile
};