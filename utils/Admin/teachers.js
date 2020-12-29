const getTeachers = (knex) => (req, res) => {

    knex('Subjects')
        .join('Employees','Employees.Employee ID','=','Subjects.Teacher')
        .select('Grade','Section','Subject','Employees.First_Name','Employees.Last_Name')
        .then(teacher => res.json(teacher))
        .catch(err => res.status(400).json("Cannot access table"));
}

const addTeachers = (knex)=>(req,res)=>{
    const {grade,section,sub,teacher}=req.body;
    console.log(req.body)

    knex('Subjects')
        .insert({
           Grade:grade,
           Section:section,
           Subject:sub,
           Teacher:teacher
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Teachers\n"+e)});
}

module.exports = {
    getTeachers:getTeachers,
    addTeachers:addTeachers
}
