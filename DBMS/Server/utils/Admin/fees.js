const getFees = (knex) => (req, res) => {

    knex('Fees')
        .returning('*')
        .then(fee => res.json(fee[0]))
        .catch(err => res.status(400).json("Error accessing Fees table"));
}

const addFees = (knex)=>(req,res)=>{
    const {grade,section,fees}=req.body;

    knex('Fees')
        .insert({
           Grade:grade,
           Section:section,
           Fees:fees
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Canteen\n"+e)});
}

module.exports = {
    getFees : getFees ,
    addFees:addFees
}

