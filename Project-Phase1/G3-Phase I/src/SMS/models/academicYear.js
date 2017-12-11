let mongoose = require('mongoose')

let academicYearSchema = new mongoose.Schema({
    title: String,
    registrationStartDate: Date,
    registrationEndDate: Date,
    startDate: Date, //academicYearStartDate
    endDate: Date, //academicYearEndDate
    status: String //could be current, next, closed
})


module.exports = mongoose.model('AcademicYear', academicYearSchema)