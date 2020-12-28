const GetClassroom = (knex) => (req, res) => {
    const { grade,section } = req.body;
    var response={}
    knex('Classroom')
        .select('Class Teacher','Strength')
        .where('grade', '=', grade)
        .andWhere('section','=',section)
        .then(classroom => reponse["class"]=classroom[0])
        .catch(err => res.status(400).json("Classroom not found"));

    knex('Student')
        .select('First Name','Last Name','Middle Name')
        .where('Grade','=',grade)
        .andWhere('Section','=',section)
        .then(students=>res.json(response["students"]=students[0]))
        .catch(res.status(400).json("Students not found"))

    }   


module.exports = {
    GetClassroom: GetClassroom
};