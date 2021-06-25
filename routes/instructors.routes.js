const express = require('express')
const router = express.Router()

// require some data form your data.js file
let {instructors, getTeachers} = require('../data')

router.get('/instructors', (req, res, next) => {
    // Consuming a promise here
    getTeachers()
        .then(( teachers) => {    
            res.render('instructors.hbs', {instructors: teachers, layout: false})
        })
        .catch(() => {
            next('some error message')
        })
})

module.exports = router