let mongoose = require('mongoose')

let attachmentSchema = new mongoose.Schema({
    title: String,
    addedOn: {type: Date, default : Date.now},
    url: String
})

let noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    isVisibleToRelative:{type:Boolean, default: false},
    updatedDate: {type: Date, default : Date.now}
})

let admissionTestSchema= new mongoose.Schema({
    testType:String,
    testDate:Date,
    score:Number,
    comment:String
})

let applicationSchema = new mongoose.Schema({
    studentID: Number,
    student: { type : mongoose.Schema.ObjectId, ref : 'Student' } ,
    academicYear: [{ type : mongoose.Schema.ObjectId, ref : 'academicYear' }],
    status: String,
    applicationDate: {type: Date, default : Date.now},
    nameOfCurrentSchool:String,
    currentGrade:String,
    gradeApplyingFor: String,
    updatedDate: {type: Date, default : Date.now},
    submittedBy: { type : mongoose.Schema.ObjectId, ref : 'Relative' },
    attachment:[attachmentSchema], //list of attachments
    notes:[noteSchema], //list of notes 
    admissionTests:[admissionTestSchema]
})

module.exports = mongoose.model('Application', applicationSchema)