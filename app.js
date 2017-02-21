var express = require('express');
var cors = require('cors');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var morgan=require('morgan');
//var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = require('express')();
var http=require('http').Server(app);
var Cars = require('./models/cars').Cars;
var greet = require('./greets.js');
var samp = require('./greets.js').as;
var session = require('express-session');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// app.use(function(req,res,next)
// {
// var views = req.session.views 

// if (!views)
// {
//   views = req.session.views = {}
// }
// next();
// })

app.use(session({ secret: 'a4f8071f-c873-4447-8ee2', 
cookie: { maxAge: 20000 },
store: new (require('express-sessions')) ({
  storage: 'mongodb',
  instance: mongoose,
  host: 'localhost',
  port: 27017,
  db:'test'

})

}));

app.use(morgan('combined'));

http.listen(8888,function(){

console.log('listening to port 8888');

} );

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prem');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db");
});


  




app.get('/',function(req,res)
{
	res.send('hello ashan');
var anx = new Cars();
anx.car_type= "sooooobu";
anx.description = "clicked";
anx.pickup_time =""; 
 
 	anx.save();


});

app.get('/bar', function (req, res, next) {
  var sess = req.session
  if(sess.views)
  {

    res.end('welcome to the session demo. ')
  }
else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }

 
})

app.post('/createdb',function(req,res)
  {
    var anx = new Cars();
   anx.car_type=req.body.cartype;
   anx.description=req.body.description;
   anx.pickup_time=req.body.pickuptime;

   anx.save();


  });

  app.get('/getusers',function(req,res)
  {
     Cars.find({car_type:"audi"&&"mike" },function(err,result)
     { 
                                if(!err)
                                {
                                res.json(200,result);
                                }

                                else
                                {
                                    res.json(400,{message: "No data available "});
                                }
     }

     
     ); 

  });

   app.get('/getusers',function(req,res)
  {
     Cars.find({car_type:"audi"&&"mike" },function(err,result)
     { 
                                if(!err)
                                {
                                res.json(200,result);
                                }

                                else
                                {
                                    res.json(400,{message: "No data available "});
                                }
     }

     
     ); 

  });

 app.get('/1',function(req,res)
  {
   
   
res.json(200,greet.sayHelloInSpanish());
     
     

  });

   app.get('/2',function(req,res)
  {
   
   
res.json(200,greet.ai);
     
     

  });

 app.get('/3',function(req,res)
  {
   
   

res.status(200);
res.json(samp);
     
     

  });



 

