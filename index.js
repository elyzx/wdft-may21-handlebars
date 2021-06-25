// setup for express
const express = require("express");
const app = express();

require('dotenv').config()



const port = 3000;

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views' )


const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')


// ROUTES DEFINED BELOW
// Home page
const homeRouter = require('./routes/home.routes')
app.use('/', homeRouter)
// Students page
const studentsRouter = require('./routes/students.routes')
app.use('/', studentsRouter)
// Instructors page
const teacherRouter = require('./routes/instructors.routes')
app.use('/', teacherRouter)

//  404 middleware
app.use((req, res) => {
    res.status(404).send('Page not found :(')
})

// Error handling middleware - by specifying four parameters
app.use((err, req, res, next) => {
    res.status(500).send(err)
})

// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);