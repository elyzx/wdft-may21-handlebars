const express = require('express')
const router = express.Router()

// require some data form your data.js file
let {students, getStudents} = require('../data')

router.get('/students', (req, res) => {
    // Consuming a promise here
    getStudents()
        .then(( myStudents ) => {
            console.log(myStudents)
            let uppercaseNames = myStudents.map((student) => {
                student.name = student.name.toUpperCase()
                return student
            })
        
            res.render('students.hbs', {students: uppercaseNames})
        })
        .catch(() => {
            console.log('Students failed to fetch')
        })
})

module.exports = router