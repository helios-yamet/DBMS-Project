const Adduser = (knex)=>(req,res)=>{
    const {userType}=req.body;

    if(useType=='Student')
    {
        const {contact,ID,fname,mname,lname,admission,dob,street,area,bldgno,absent,paid,busno,grade,section}=req.body
        knex('Students')
        .insert({
           Contact Number:contact,
            Student ID:ID,
            First Name: fname,
            Last Name:lname,
            Middle Name:mname,
            Date of Admission:admission,
            DOB: dob,
            Street Name:street,
            Area:area,
            Building Number:bldgno,
            Days Absent:absent,
            Fee Paid: paid,
            Bus Number: busno,
            Grade:grade,
            Section:section
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Students\n"+e)});        

        knex('Login')
        .insert({
            id:ID,
            password:dob,
        })
        .then(data=>{console.log("added to Login");res.status(400)})
        .catch(e=>console.log(e))
    }
    else if(userType=='Faculty')
    {
        const {empID,absent,number,f,mname,lname,dob,doj,salary,street,area,supervisor,sub,busno,marital}=req.body   
        knex('Employees')
        .insert({
            Employee ID:empID,
            Absent Days:absent,
            Contact Number: number,
            First_Name:fname,
            Middle_Name:mname,
            Last_Name:lname,
            DofB:dob,
            Date of Joining:doj,
            Salary: salary,
            Street Name: street,
            Area: area,
            Building Number: bldgno,
            Supervisor:supervisor,
            Subject Taught: sub,
            Bus Number: busno,
            Marital Status:marital
        })
        .then(data=>{console.log("added to Employees");res.status(400)})
        .catch(e=>{console.log("error adding to Employees\n"+e)});

        knex('Login')
        .insert({
            id:empID,
            password:dob,
        })
        .then(data=>{console.log("added to Login");res.status(400)})
        .catch(e=>console.log(e))
    }
    else if(userType=='Admin')
    {
        const {empID,absent,number,f,mname,lname,dob,doj,salary,street,area,role,supervisor,busno}   = req.body
        knex('Employees')
        .insert({
            Employee ID:empID,
            Absent Days:absent,
            Contact Number: number,
            First_Name:fname,
            Middle_Name:mname,
            Last_Name:lname,
            DofB:dob,
            Date of Joining:doj,
            Salary: salary,
            Street Name: street,
            Area: area,
            Building Number: bldgno,
            Role: role,
            Supervisor:supervisor,
            Bus Number: busno
        })
        .then(data=>{console.log("added to Employees");res.status(400)})
        .catch(e=>{console.log("error adding to Employees\n"+e)});

        knex('Login')
        .insert({
            id:empID,
            password:dob,
        })
        .then(data=>{console.log("added to Login");res.status(400)})
        .catch(e=>console.log(e))
    }
    else
    {
        const {contact, fname,lname,mname,job,mail,ID} =req.body
        knex('Guardians')
        .insert({
           Contact Number:contact,
            FName:fname,
            LName : lname,
            MName:mname,
            Employment:job,
            Email:mail
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to guardians\n"+e)});

        knex('Guardians of')
        .insert({
            Contact Number:contact,
            Student ID:ID,
        })
        .then(data=>{console.log("added to databse");res.status(400)})
        .catch(e=>{console.log("error adding to Guardian of\n"+e)});
        knex('Login')
        .insert({
            id:contact,
            password:DOB,
        })
        .then(data=>{console.log("added to Login");res.status(400)})
        .catch(e=>console.log(e))

    }
}

module.exports = {
    Adduser: Adduser
}