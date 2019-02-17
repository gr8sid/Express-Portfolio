let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

router.get('/aboutme', (req, res, next) => {
  res.render('aboutme.ejs', { title: 'About Me' });
});

router.get('/contactme', (req, res, next) => {
  res.render('contactme', { title: 'Contact Me' });
});

router.get('/projects', (req, res, next) => {
  res.render('home', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('services.ejs', { title: 'Services' });
});

router.get('/favourite-things', (req, res, next) => {
  res.render('index', { title: 'Favourite Things' });
});

router.get('/MyProjectList/:id', (req, res, next) => {
 // res.send('| Sidharth Wants id : ' + req.params.id)
 var id = req.params.id;
  res.render( 'myProjList', { title: id });
});

router.get('/MyProjectList', (req, res, next) => {
  
   res.render( 'myProjList', { title: "My Projects" });
 });

module.exports = router;
