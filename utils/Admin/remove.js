const  DeleteItem =  (knex) => (req, res) => {
    const {key1,key2,key3,table,pk} =req.body
    console.log(req.body)
    
    if(table=='Subjects')
    {

        knex(table)
            .where("Grade",'=',key1)
            .andWhere("Section",'=',key2)
            .andWhere("Subject",'=',key3).del('*')
            .then(t=>{res.json("delete successful");})
            .catch(err => console.log(err));
    }

    else if(table!="Fees")        
    {
            knex(table)
            .where(pk,'=',key1).del('*')
            .then(t=>{res.json("delete successful");})
            .catch(err => console.log(err));

    }
    else{
        knex(table)
            .where("Grade",'=',key1)
            .andWhere("Section",'=',key2).del('*')
            .then(t=>{res.json("delete successful");})
            .catch(err => console.log(err));

    }

}


module.exports = {
    DeleteItem:DeleteItem
}
