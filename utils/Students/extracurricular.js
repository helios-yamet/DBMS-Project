const getExtraCurricular = (knex) => (req, res) => {
    const { id } = req.body;


    knex("Subjects")
        .select("Subject")
        .join('Students',function(){
            this
            .on('Students.Grade','=','Subjects.Grade')
            .andOn('Students.Section','=','Subjects.Section')
        }).where("Students.Student ID",'=',id)
        .then(function(subs){
            knex('Part of')
            .select('Club')
            .where('Student','=',id)
            .then(clubs=>{res.json({subjects:subs,clubs:clubs});console.log(subs)})
            .catch(e=>{console.log("cannot find clubs");res.json({subjects:subs,clubs:[]})})
        })
        .catch(console.log("Can't get subjects"))
}

module.exports = {
    getExtraCurricular: getExtraCurricular
};