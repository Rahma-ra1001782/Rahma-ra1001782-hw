class smsController {
    constructor() {
        this.smsRespository = require('../models/smsRepository')
    }



    async initDb (req, res) {
        await this.smsRespository.initDb()
        if (res) {
            res.status(200).send('done')
        }
    }

    async login(req,res) {
        const loginInfo = req.body
        console.log("login information", loginInfo)
/*
        userRepository.login(loginInfo.username, loginInfo.password).then(user => {
            req.session.user = user
            res.redirect(req.session.prevUrl)
        })
            .catch(err => {
                console.log(err)
                res.render('login', { errMessage: err } )
            })
        */
    }
}

module.exports = new smsController()