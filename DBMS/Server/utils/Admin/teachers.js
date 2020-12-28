const getTeachers = (knex) => (req, res) => {

    knex('Subjects')
        .join('Employees','Employees.Employee ID','=','Subjects.Teacher')
        .select('Grade','Section','Subject','Employees.First_Name','Employees.Last_Name')
        .then(teacher => res.json(teacher[0]))
        .catch(err => res.status(400).json("Cannot access table"));
}

const addTeachers = (knex)=>(req,res)=>{
    const {grade,section,sub,id}=req.body;

    knex('Subjects')
        .insert({
           Grade:grade,
           Section:section,
           Subject:sub,
           Teacher:id
        })
        .then(data=>{console.log("added to database");res.status(400)})
        .catch(e=>{console.log("error adding to Canteen\n"+e)});
}

module.exports = {
    getTeachers:getTeachers,
    addTeachers:addTeachers
}
