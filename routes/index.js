var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/vms', db.getAllVms);
router.get('/api/vm/:id', db.getSingleVm);
router.post('/api/vm', db.createVm);
router.put('/api/vm/:id', db.updateVm);
router.delete('/api/vm/:id', db.removeVm);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
