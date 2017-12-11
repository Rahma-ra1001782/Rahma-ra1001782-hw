let mongoose = require('mongoose')



let relativeSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    dateOfBirth:{type:Date},
    gender:String,
    nationalId:String,
    homePhone:String,
    mobile:String,
    street:String,
    city:String,
    country:String,
    occupation:String,
    nameOfEmployer:String,
    employerCity:String,
    employerCountry:String,
    employerPhone:String,
    relationWithStudent:String,
    isPrimary:{type:Boolean, deffalse:false}

})


module.exports = mongoose.model('Relative', relativeSchema)