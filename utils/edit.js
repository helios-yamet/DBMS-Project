const EditUser = (knex) => (req, res) => {
    const { userType } = req.body;

if(userType=="Student")
{   const {fname,lname,mname,contact,bldgno,area,street,dob,id} =req.body
    knex('Student')
        .where('Student ID', '=', id)
        .update({
           [ "First Name"]:fname,
            ["Last Name"]:lname,
            ["Middle Name"]:mname,
            ["Contact Number"]:contact,
            ["Building Number"]:bldgno,
            Area:area,
            ["Street Name"]:street,
            DOB: dob
        })
        .then(user => res.status(400))
        .catch(err => res.status(400).json("User not found"));
}
else if(userType=='Admin'||userType=="Faculty")
{
    const {fname,lname,mname,contact,bldgno,area,street,dob,id,marital} =req.body
    knex('Employees')
        .where('Employee ID', '=', id)
        .update({
            First_Name:fname,
            Last_Name:lname,
            Middle_Name:mname,
            ["Contact Number"]:contact,
            ["Building Number"]:bldgno,
            Area:area,
            ["Street Name"]:street,
            DofB: dob,
            ["Marital Status"]: marital
        })
        .then(user => res.status(400))
        .catch(err => res.status(400).json("User not found"));   
}

else 
{
    const {fname,lname,mname,job,contact,mail,id} =req.body
    knex('Guardians')
        .where('Contact Number', '=', id)
        .update({
            FName:fname,
            LName:lname,
            MName:mname,
            ["Contact Number"]:contact,
            Email:mail,
            Employment:job
        })
        .then(user => res.status(400))
        .catch(err => res.status(400).json("User not found"));   
}
}

module.exports = {
    Edituser: EditUser
};