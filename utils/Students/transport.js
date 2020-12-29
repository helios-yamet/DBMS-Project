const getTransport = (knex) => (req, res) => {
    const { busno } = req.body;

    knex('Transport')
        .select('Route','Fees','Employees.First_Name','Employees.Last_Name','Employees.Middle_Name')
        .join('Employees','Employees.Employee ID','=','Transport.Employee ID')
        .where('Transport.  Bus Number', '=', busno)
        .then(bus_details => res.json(bus_details[0]))
        .catch(err => console.log(err));
}

module.exports = {
    getTransport: getTransport
};