const getTransport = (knex) => (req, res) => {
    const { busno } = req.body;

    knex('Transport')
        .select('Route','Fees','Employees.First_Name','Employees.Last_Name','Employees.Middle_Name')
        .join('Employees','Employees.Employee ID','=','Transport.Employee ID')
        .where('Bus Number', '=', busno)
        .then(bus_details => res.json(bus_details[0]))
        .catch(err => res.status(400).json("Transport Data not found"));
}

module.exports = {
    getTransport: getTransport
};