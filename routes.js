const express = require('express')
const router = express.Router()



router.route('/login')
    .get( (req, res) => res.render('login'))
    .post( (req, res) => {
        const userInfo = req.body
        console.log("router.post.req.body", userInfo)
        //Return an accessCount cookie to the client -- expires is optional
        const duration24H = 24*60*60*1000
        res.cookie('username', userInfo.username, { expires: new Date(Date.now() + duration24H) })
        res.redirect('/')
    })

router.get('/logout', (req, res) => {
    //clear cookie
    res.cookie('username', '', {expires: new Date(0)})
    res.redirect("/")
})

//Middleware to intercept requests and redirect to the login page if the user is not logged-in
router.use( (req, res, next) => {

    if (!req.cookies.username) {

        if (req.url == '/register')
         { return next()
         }

         else
        {
            res.redirect("/login")
        }
    }
    else {
        const username = req.cookies.username
        console.log("Current username", username)

        //Allows accessing username variable from handlebars template
        res.locals.username = username
        if (username == "applicant")
            {res.locals.role = "applicant"}
        else if (username == "admin")
            {res.locals.role = "admin"}

        return next()
    }
})

router.get('/index', (req, res) => {
        if (res.locals.role == "admin"){
            res.render('index-admin')
        } else if (res.locals.role == "applicant") {
            //Dummy data
            let apps = [
                {
                    FirstName: "FN1",
                    LastName: "LN1",
                    age: 10,
                    status: "Pending"

                },
                {
                    FirstName: "FN2",
                    LastName: "LN2",
                    age: 15,
                    status: "Accepted"

                },
                {
                    FirstName: "FN3",
                    LastName: "LN3",
                    age: 13,
                    status: "Rejected"
                }]
            res.render('index-applicant' , {apps})
        }
    }
)

router.route('/register')
    .get( (req, res) => res.render('applicant' ,{Type:"Applicant Registeration"}))
    .post( (req, res) =>  res.render('applicant', {Type:"Applicant Registeration"} ))

router.route('/profile')
    .get( (req, res) => res.render('applicant' ,{Type:"Update Applicant"}))

router.route('/applications/new')
    .get( (req, res) => res.render('application',{Type:"New Applicantion "}))

router.route('/applications/1')
    .get( (req, res) => res.render('/views/application',{Type:"Update Applicantion "}))


router.get('/', (req, res) => {
    res.redirect('/index') }
 )

router.get('/reports', (req, res) => {
    res.sendFile(__dirname + "/views/report.html") }


)
module.exports = router
