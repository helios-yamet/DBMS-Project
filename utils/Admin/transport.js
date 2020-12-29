const getTransport = (knex) => (req, res) => {

    knex('Transport')
        .returning('*')
        .then(transport => res.json(transport))
        .catch(err => res.status(400).json("Cant access Transport table"));
}

const addTransport = (knex)=>(req,res)=>{
    const {route,empID,busno,fees}=req.body;
    console.log(req.body)
    knex('Transport')
        .insert({
           ["Bus Number"]: busno,
           Fees:fees,
           Route:route,
           ["Employee ID"]:empID
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Transport\n"+e)});
}

module.exports = {
    getTransport : getTransport ,
    addTransport:addTransport
}