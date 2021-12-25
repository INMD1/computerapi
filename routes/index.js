const express = require('express');
const router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.status(200).json(JSON.parse(fs.readFileSync('/home/ubuntu/바탕화면/github/computerapi/public/json/data.json', 'utf8')));
});


module.exports = router;
