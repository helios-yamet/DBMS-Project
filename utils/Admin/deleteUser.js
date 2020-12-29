const DeleteUser = (knex) => (req, res) => {
    const {id} =req.body
    console.log("id:"+id)
    var count;
    var contact= knex('Guardian of')
    .where("Student ID",'=',id)
    .del()
    .returning('Contact Number')
    .then(t=>{console.log("t"+t+typeof t);

        knex('Guardian of')
            .count('Contact Number')
            .where("Contact Number",'=',parseInt(t))
            .then(result=>count=parseInt(result))
            .catch(e=>console.log("contact",console.log(e)))

    })
    .catch(err => console.log(err));
    console.log("count",count)
    if(count==0)
    {
        knex('Guardians')
        .where('Contact Number','=',contact)
        .del()

    }
    
    knex('Students')
    .where('Student ID','=',id).del()
    .then(t=>{console.log(t);res.status(400)})
    .catch(err => res.status(400).json(console.log(err)));

/*
    knex('Employees')
    .where('Employee ID','=',id).del()
    .then(t=>{console.log("Deleted from employees");res.status(400)})
    .catch(err => res.status(400).json("Cannot delete from Employees"));



    knex('Login')
    .where("id",'=',id).del()
    .then(t=>{console.log("Deleted from Login");res.status(400)})
    .catch(err => res.status(400).json("Cannot Delete from login"));

    */
}


module.exports = {
    DeleteUser:DeleteUser
}
