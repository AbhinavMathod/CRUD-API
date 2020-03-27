let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), 
    bodyParser = require('body-parser');

// mongoose instance connection
mongoose.connect('mongodb://localhost:27017/todoList', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;


//Adding body parser for reading json body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//Initialize app
let initApp = require('./app');
initApp(app);
//initializing port
app.listen(port);
console.log('The app is started on the port: ' + port);

//handling 404 error request
app.use((req, res, next) => {
    res.status(404).send('You have entered the wrong URI')
  })