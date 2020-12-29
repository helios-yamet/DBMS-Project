const  DeleteUser =  (knex) =>async (req, res) => {
    const {id} =req.body
    console.log("id:"+id)
    var count;
    var contact=await knex('Guardian of')
    .where("Student ID",'=',id)
    .del('Contact Number')
    .then(t=>{console.log("t "+typeof t);
                console.log(parseInt(t[0]), "   ",t[0])

        knex('Guardian of')
            .count('Contact Number')
            .where("Contact Number",'=',parseInt(t[0]))
            .then(result=>{;console.log("result ",result[0].count," ", parseInt(result[0].count));
            if(result[0].count==0)
            {
                console.log("here  ",t[0] )
                knex('Guardians')
                .where('Contact Number','=',parseInt(t[0]))
                .del('*')
                .then(data=>console.log(data))

                knex('Login')
                .where("id",'=',parseInt(t[0])).del('*')
                .then(t=>{console.log("Deleted from Login");})
                .catch(err => res.status(400).json("Cannot Delete from login"));
            
        
            }
        })
            .catch(e=>console.log(e))

    })
    .catch(err => console.log(err));

   
    
    knex('Students')
    .where('Student ID','=',id).del('*')
    .then(t=>{console.log(t)})
    .catch(err => res.status(400).json(console.log(err)));


    knex('Employees')
    .where('Employee ID','=',id).del('*')
    .then(t=>{console.log("Deleted from employees");})
    .catch(err => res.status(400).json("Cannot delete from Employees"));



    knex('Login')
    .where("id",'=',id).del('*')
    .then(t=>{console.log("Deleted from Login");})
    .catch(err => res.status(400).json("Cannot Delete from login"));

 
}


module.exports = {
    DeleteUser:DeleteUser
}
