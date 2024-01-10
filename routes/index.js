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
});

// Get form page
router.get('/new', (req,res)=>{
  res.render('form'); //to render the form template
});

// Import body-parser middleware
const bodyParser = require('body-parser');

// Use body-parser middleware to parse form data
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/new', (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect('/'); // Redirect to the index page
});

module.exports = router;
