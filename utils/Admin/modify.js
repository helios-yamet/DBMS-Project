const  ModifyItem =  (knex) => (req, res) => {
    const {value,table,key1,key2} =req.body
    console.log(req.body)
    if(table=='Transport')
    {
        pk="Bus Number"
        knex(table)
    .where(pk,'=',key1)
    .update({
        Fees:value

    })
    .then(t=>{res.json("Modify  successful");})
    .catch(err => console.log(err));
    }
    else if(table=="Fees")
    {
        pk1="Grade"
        pk2="Section"
        knex(table)
        .where(pk1,'=',key1)
        .andWhere(pk2,'=',key2)
        .update({
            Fee:value
        })
        .then(t=>{res.json("Modify successful");})
        .catch(err => console.log(err));
    }
    



}


module.exports = {
    ModifyItem:ModifyItem
}
