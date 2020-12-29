const handleSignin = (knex, bcrypt) => (req, res) => { 
    const { id, password, userType } = req.body;
    console.log(req.body)
    console.log('signin request initiated', id, password);
    var table,column;
    if(!id || !password)
        return res.status(400).json("Please enter ID and password");
        


    knex.select('*'). from('Login')
    .where('id', '=', id)
    .then(data => {
        console.log("recieved ",data[0],'\n');

        if(password==data[0].hash) {
            console.log('logged in');
            if(data[0].userType=='Student')
            {table="Students"
             column="Student ID"}  
        else if(data[0].userType=='Faculty'||data[0].userType=='Admin')
            {table="Employees"
             column='Employee ID'}
    
        else   
        {
            table="Guardians"
            column="Contact Number"
        }
            return knex.select('*'). from(table)
                .where(column, '=', id)
                .then(user => {
                    var temp = {}
                    temp["userType"] = data[0]["userType"]
                    
                    var result = {
                    ...temp,
                    ...user[0]
                    }
                    console.log("temp ",result," ",typeof result);
                    res.json(result);
                })
                .catch(err => { console.log(err); res.status(400).json("Error logging in"); });
        }
        else 
            res.status(400).json("Incorrect Password");
    })
    .catch(err => res.status(400).json("User with this ID does not exist"));

    
    

}


module.exports = {
    handleSignin: handleSignin
};