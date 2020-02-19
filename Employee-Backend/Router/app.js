const express = require("express");
const router = express.Router();
const candidateController = require('../Controller/app')

router.post('/addEmployee', candidateController.addEmployee);
router.get('/getEmployee', candidateController.getEmployee);


router.post('/updateEmployee', candidateController.updateEmployee);

router.delete('/deleteEmployee/:id', candidateController.removeEmployee);

module.exports = router;