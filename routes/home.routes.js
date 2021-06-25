const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    let myName = 'Manish'
    console.log (  process.env.PASSWORD  )
    res.render('landing.hbs', {name: myName, age: 19})
})

module.exports = router