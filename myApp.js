
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server 
app.get('/now', (req,res, next)=>{
	req.time = new Date().toString();
	next();
},
(req,res) => {
	res.json({"time": req.time});
}
);

/** 9)  Get input from client - Route parameters 
app.get('/:word/echo', (req,res) => {
  res.json({echo: req.params.word});
});

/** 10) Get input from client - Query parameters 
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req,res)=>{
  res.json({name: `${req.query.first} ${req.query.last}`});
});
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.use(bodyParser.urlencoded({extended: false}));

/** 12) Get data form POST  */

app.post('/name',(req,res)=> {
  res.json({name: `${req.body.first} ${req.body.last}`})
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
//app.listen(process.env.PORT || 80 ); 

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
