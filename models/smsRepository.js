const AcademicYear = require('./AcademicYear')
const Application = require('./application')
const Relative = require('./relative')
const Staff = require('./staff')
const Student = require('./student')

class smsRepository {

    async addStudent(newStudent) {
        return await Student.create(newStudent)
    }

    async getStudents() {
        return await Student.find({})
    }

    async getStudentsCount() {
        return await Student.count({})
    }

    async addStaff(newStaff) {
        return await Staff.create(newStaff)
    }

    async getStaffs() {
        return await Staff.find({})
    }

    async getStaffCount() {
        return await Staff.count({})
    }

    async addRelative(newRelative) {
        return await Relative.create(newRelative)
    }

    async getRelatives() {
        return await Relative.find({})
    }

    async getRealtivesCount() {
        return await Relative.count({})
    }

    async addAcademicYear(newAcademicYear) {
        return await AcademicYear.create(newAcademicYear)
    }

    async addApplication(newApplication) {
        return await Application.create(newApplication)
    }



    async getAcademicYears() {
        return await AcademicYear.find({})
    }



    async getAcademicYear(title) {
        const query = AcademicYear.findOne({}, "_id")
        //If lastName is defined then filter by lastName
        if (title) {
            query.where({title: title})
        }
        return query

    }







    async getAcademicYearCount() {
        return await AcademicYear.count({})
    }

    /* Get relatives by matching the last name of student and Relative */
    getRelative(lastname) {
        //Only retrieve the Relative id
        const query = Relative.find({}, "_id")
        //If lastName is defined then filter by lastName
        if (lastname) {
            query.where({lastName: lastname})
        }
        return query
    }


    getPrimaryRelative(lastname) {

        const query = Relative.findOne({lastName: lastname, isPrimary: true}, "_id")

        return query
    }

    getStudent(studentID){
        const query = Student.findOne({}, "_id")
        if (studentID) {
            query.where({studentId: studentID})
        }
        return query
    }


    //in case needed during testing
    async emptyDB() {
        await Student.remove({})
        await Staff.remove({})
        await Relative.remove({})
        await AcademicYear.remove({})
        await Application.remove({})

    }

    async initDb() {
        try {
            //Empty the database. Comment out emptyDB to stop re-initializing the DB
            await this.emptyDB()
            //If the db is empty then load data from json files
            const studentCount = await this.getStudentsCount()
            console.log(`Students Count: ${studentCount}. Comment out emptyDB() to stop re-initializing the database`)
            if (studentCount == 0) {
                await this.loadDataFromJsonFiles()
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    async loadDataFromJsonFiles() {
        const fs = require('fs-extra')

        //Adding Staff
        const staffData = await fs.readFile('data/staff.json')
        const staff = JSON.parse(staffData)

        console.log('Retrieved Staff from json file and added to MongoDB staff Collection: ' + staff.length)
        for (const stf of staff) {
            await this.addStaff(stf)
        }

        //Adding relatives
        const relativeData = await fs.readFile('data/Relative.json')
        const relatives = JSON.parse(relativeData)

        console.log('Retrieved Relatives from json file and added to MongoDB Relative Collection: ' + relatives.length)
        for (const relative of relatives) {
            await this.addRelative(relative)
        }


        //Adding Students
        let studentData = await fs.readFile('data/student.json')
        let students = JSON.parse(studentData)
        console.log('Retrieved students from json file and added to MongoDB Student Collection: ' + students.length)

        for (let std of students) {
            const relatives = await this.getRelative(std.lastName)
            let temp = []
            for (let rel of relatives) {
                temp.push(rel);
            }
            std.relatives = temp
            await this.addStudent(std)
        }

        //Adding Academic Year
        const academicYearData = await fs.readFile('data/academicYear.json')
        const academicYears = JSON.parse(academicYearData)

        console.log('Retrieved Academic Years from json file and added to MongoDB Academic Year Collection: ' + academicYears.length)
        for (const year of academicYears) {
            await this.addAcademicYear(year)
        }


        //Adding Applications
        const applicationData = await fs.readFile('data/application.json')
        const applications = JSON.parse(applicationData)

        console.log('Retrieved Applications from json file and added to MongoDB Application Collection: ' + applications.length)

        for(let app of applications) {
            let studentObj = students.shift()
            let studentID = studentObj.studentId;
            let studentStatus = studentObj.status;
            let studentLastName = studentObj.lastName;
            let academicYear = studentObj.studentId.toString().substr(0, 4);

            const studentid = await this.getStudent(studentID)
            let academicYr = await this.getAcademicYear(academicYear)
            let submittedBy = await this.getPrimaryRelative(studentLastName)

            app.student = studentid
            app.status= studentStatus
            app.studentID = studentID
            app.academicYear = academicYr
            app.submittedBy =submittedBy

            await this.addApplication(app)


        }


    }
}

module.exports = new smsRepository()