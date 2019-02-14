let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', (req, res, next) => {
  res.render('index', { title: 'About Me' });
});

router.get('/contactme', (req, res, next) => {
  res.render('index', { title: 'Contact Me' });
});

router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

router.get('/favourite-things', (req, res, next) => {
  res.render('index', { title: 'Favourite Things' });
});


module.exports = router;
