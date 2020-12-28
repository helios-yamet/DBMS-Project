const getExtraCurricular = (knex) => (req, res) => {
    const { id } = req.body;


    knex("Subjects")
        .select("Subject Name")
        .join('students',function(){
            this
            .on('Students.Grade','=','Subjects.Grade')
            .on('Students.Section','=','Subjects.Section')
        }).then(function(subs){
            knex('Part Of')
            .select('Club')
            .where('Student ID','=',id)
            .then(clubs=>res.json({subjectss:subs[0],clubs:clubs[0]}))
            .catch(e=>{console.log("cannot find clubs");res.json({subjectss:subs[0],clubs:[]})})
        })
        .catch(console.log("Can't get subjects"))
}

module.exports = {
    getExtraCurricular: getExtraCurricular
};