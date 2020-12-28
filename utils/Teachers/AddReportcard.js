const AddReportCard = (knex)=>(req,res)=>{
    const {subject,grade,section,ID,subject_grade,academic_year,remarks}=req.body;

    knex('Report Card')
        .insert({
            Subject ID:subject,
            Student ID:ID,
            Academic Year: academic_year,
            Teacher comments:remarks,
            Subject_Grade:subject_grade
        })
        .then(data=>{console.log("added to databse");res.status(400)})
        .catch(e=>{console.log("error adding to Report Card\n"+e)});
}

module.exports = {
    AddReportCard: AddReportCard
}