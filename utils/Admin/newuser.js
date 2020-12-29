const Adduser = (knex)=>(req,res)=>{
    const {userType}=req.body;

    if(userType=='Student')
    {
        const {contact,ID,fname,mname,lname,admission,dob,street,area,bldgno,absent,paid,busno,grade,section}=req.body
        console.log(req.body,req.body.absent,absent)
        knex('Students')
        .insert({
           ["Contact Number"]:contact,
            ["Student ID"]:ID,
            ["First Name"]: fname,
            ["Last Name"]:lname,
            ["Middle Name"]:mname,
            ["Date of Admission"]:admission,
            DOB: dob,
            ["Street Name"]:street,
            Area:area,
            ["Building Number"]:bldgno,
            ["Days Absent"]:absent,
            ["Fee paid"]: paid,
            ["Bus Number"]: busno,
            Grade:grade,
            Section:section
        })
        .then(data=>{console.log("added to database");
            knex('Login')
            .insert({
                id:ID,
                hash:dob,
                userType:"Student"
            })
            .then(data=>{console.log("added to Login")})
            .catch(e=>console.log(e));
    
    })
        .catch(e=>{console.log("error adding to Students\n"+e)});        

}    
    else if(userType=='Faculty')
    {
        const {empID,absent,number,f,mname,lname,dob,doj,salary,street,area,supervisor,sub,busno,marital,bldgno}=req.body   
        knex('Employees')
        .insert({
            ["Employee ID"]:empID,
            ["Absent Days"]:absent,
            ["Contact Number"]: number,
            First_Name:fname,
            Middle_Name:mname,
            Last_Name:lname,
            DofB:dob,
            ["Date of Joining"]:doj,
            Salary: salary,
            ["Street Name"]: street,
            Area: area,
            ["Building Number"]: bldgno,
            Supervisor:supervisor,
            ["Subject Taught"]: sub,
            ["Bus Number"]: busno,
            ["Marital Status"]:marital
        })
        .then(data=>{console.log("added to Employees");
                            knex('Login')
                            .insert({
                                id:empID,
                                hash:dob,
                                userType:"Faculty"
                            })
        .then(data=>{console.log("added to Login");})
        .catch(e=>console.log(e))
            })
        .catch(e=>{console.log("error adding to Employees\n"+e)});


    }
    else if(userType=='Admin')
    {
        const {empID,absent,number,mname,lname,dob,doj,salary,street,area,role,supervisor,busno,bldgno,marital}   = req.body
        knex('Employees')
        .insert({
            ["Employee ID"]:empID,
            ["Absent Days"]:absent,
            ["Contact Number"]: number,
            First_Name:fname,
            Middle_Name:mname,
            Last_Name:lname,
            DofB:dob,
            ["Date of Joining"]:doj,
            Salary: salary,
            ["Street Name"]: street,
            Area: area,
            ["Building Number"]: bldgno,
            Role: role,
            Supervisor:supervisor,
            ["Bus Number"]: busno,
            ["Marital Status"]:marital
        })
        .then(data=>{console.log("added to Employees");
            knex('Login')
            .insert({
                id:empID,
                hash:dob,
                userType:"Faculty"
            })
        .then(data=>{console.log("added to Login");})
        .catch(e=>console.log(e))})
        .catch(e=>{console.log("error adding to Employees\n"+e)});

        
    }
    else
    {
        const {contact, fname,lname,mname,job,mail,ID} =req.body
        knex('Guardians')
        .insert({
           ["Contact Number"]:contact,
            FName:fname,
            LName : lname,
            MName:mname,
            Employment:job,
            Email:mail
        })
        .then(data=>{console.log("added to guardians");
        knex('Guardian of')
        .insert({
            ["Contact Number"]:contact,
            ["Student ID"]:ID,
        })
        .then(data=>{console.log("added to guardians of");})
        .catch(e=>{console.log("error adding to Guardian of\n"+e)});
    })
        .catch(e=>{console.log("error adding to guardians\n"+e)});

        
        knex('Login')
        .insert({
            id:contact,
            hash:ID,
            userType:"Parent"
        })
        .then(data=>{console.log("added to Login");})
        .catch(e=>console.log(e,"login table"))

    }
}

module.exports = {
    Adduser: Adduser
}