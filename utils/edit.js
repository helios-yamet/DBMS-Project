const EditUser = (knex) => (req, res) => {
    const { userType } = req.body;
    console.log(userType);
if(userType=="Student")
{   const {fname,lname,mname,contact,bldgno,area,street,dob,ID} =req.body
console.log(req.body)
    knex('Students')
        .where('Student ID', '=', ID)
        .update({
           ["First Name"]:fname,
            ["Last Name"]:lname,
            ["Middle Name"]:mname,
            ["Contact Number"]:contact,
            ["Building Number"]:bldgno,
            Area:area,
            ["Street Name"]:street,
            DOB: dob
        })
        .then(user => res.status(400))
        .catch(err => console.log(err));
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
        .catch(err => console.log(err));   
}

else 
{
    const {fname,lname,mname,job,contact,mail,ID} =req.body
    knex('Guardians')
        .where('Contact Number', '=', contact)
        .update({
            FName:fname,
            LName:lname,
            MName:mname,
            ["Contact Number"]:contact,
            Email:mail,
            Employment:job
        })
        .then(user => res.status(400))
        .catch(err => console.log(err));   
}
}

module.exports = {
    Edituser: EditUser
};