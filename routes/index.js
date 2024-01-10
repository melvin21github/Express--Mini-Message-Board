var express = require('express');
var router = express.Router();

const messages =[
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
  next();
});

// new form
router.get('/new', (req,res)=>{
  res.render('form');
});

// post request
router.post('/new', (req,res)=>{
  messages.push({text: req.body.message, user: req.body.author, added: new Date()});
  res.redirecct('/');
});



module.exports = router;
