const getCanteen = (knex) => (req, res) => {

    knex('Canteen')
        .returning('*')
        .then(canteen => res.json(canteen[0]))
        .catch(err => res.status(400).json("User not found"));
}

const addCanteen = (knex)=>(req,res)=>{
    const {supplier,meal,price}=req.body;

    knex('Canteen')
        .insert({
           Supplier:supplier,
            ["Meal Name"]:meal,
            Price: price,
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Canteen\n"+e)});
}

module.exports = {
    getCanteen : getCanteen ,
    addCanteen:addCanteen
}
