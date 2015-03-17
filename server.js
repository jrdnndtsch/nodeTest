var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/db_snacks'); // connect to our database

var Snack = require('./app/models/snacks.js')
// BASE Setup - pull in required packages

var express= require('express');       
var app= express();                
var bodyParser= require('body-parser'); //parser for json

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//Routes

var router = express.Router();  

router.use(function(req, res, next) {
 
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// space for more routes

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'merp an API' });   //test route message
});

app.listen(port);
console.log('the magic ' + port);



router.route('/snacks')

.post(function(req, res) {
	console.log('snacks');
       var snack = new Snack();      
       snack.name = req.body.name; 
       
       snack.save(function(err) {
           if (err)
               res.send(err);

           res.json({ message: 'GOT SNACKS!' });
       });
       
   });

.get(function(req, res) {
        Snack.find(function(err, snacks) {
            if (err)
                res.send(err);

            res.json(snacks);
        });
    });
app.use('/api', router);
