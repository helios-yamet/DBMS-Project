const getExtraCurricular = (knex) => (req, res) => {
    const { id } = req.body;


    knex("Subjects")
        .select("Subject")
        .join('Students',function(){
            this
            .on('Students.Grade','=','Subjects.Grade')
            .andOn('Students.Section','=','Subjects.Section')
        }).then(function(subs){
            knex('Part of')
            .select('Club')
            .where('Student','=',id)
            .then(clubs=>res.json({subjects:subs,clubs:clubs}))
            .catch(e=>{console.log("cannot find clubs");res.json({subjects:subs,clubs:[]})})
        })
        .catch(console.log("Can't get subjects"))
}

module.exports = {
    getExtraCurricular: getExtraCurricular
};