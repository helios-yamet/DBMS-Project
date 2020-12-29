const GetClassroom = (knex) => (req, res) => {
    const { grade,section } = req.body;

    var response={}
    knex('Classroom')
        .select('Class Teacher','Strength')
        .where('Grade', '=', grade)
        .andWhere('Section','=',section)
        .then(classroom => response["class"]=classroom)
        .catch(err => console.log(err));

    knex('Students')
        .select('First Name','Last Name','Middle Name')
        .where('Grade','=',grade)
        .andWhere('Section','=',section)
        .then(students=>{response["students"]=students;res.json(response)})
        .catch(e=>console.log(e))

    }   


module.exports = {
    GetClassroom: GetClassroom
};