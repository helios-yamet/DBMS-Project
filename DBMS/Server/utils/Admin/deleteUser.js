const DeleteUser = (knex) => (req, res) => {
    const {id} =req.body
    var count;
    var contact=await knex('Guardians of')
    .where("Student ID",'=',id).del()
    .returning('Contact Number')
    .then(t=>{
        knex('Guardian of')
            .count('Contact Number')
            .where("Contact Number",'=',t)
            .then(result=>count=result)
            .catch(e=>console.log("cannot get count"))

    })
    .catch(err => res.status(400).json("Cannot delete from Students"));
    if(count==0)
    {
        knex('Guardians')
        .where('Contact Number','=',contact)
        .del()

    }
    knex('Students')
    .where('Student ID','=',id).del()
    .then(t=>{console.log("Deleted from Student");res.status(400)})
    .catch(err => res.status(400).json("Cannot delete from student"));


    knex('Employees')
    .where('Employee ID','=',id).del()
    .then(t=>{console.log("Deleted from employees");res.status(400)})
    .catch(err => res.status(400).json("Cannot delete from Employees"));



    knex('Login')
    .where("id",'=',id).del()
    .then(t=>{console.log("Deleted from Students");res.status(400)})
    .catch(err => res.status(400).json("Cannot Delete from login"));

    
}


module.exports = {
    DeleteUser:DeleteUser
}
