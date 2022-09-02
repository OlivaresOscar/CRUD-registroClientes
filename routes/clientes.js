var express = require('express');
var router = express.Router();
const clientesController = require("../controllers/clientesController"); 
/* GET home page. */
router.get('/',clientesController.index);
router.get('/crear',clientesController.crear);
router.post("/",clientesController.guardar);
module.exports = router;
