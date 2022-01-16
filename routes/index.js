const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const pathfile = path.dirname(__filename).replace("routes", "");

const cors = require('cors');

router.use(cors());
/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).json(JSON.parse(fs.readFileSync(`${pathfile}/public/json/data.json`, 'utf8')));
});


module.exports = router;
