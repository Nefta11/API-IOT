const sensorvaluesController=require('../controllers/sensorvalues.controller');
const {Router}=require('express');
const router=Router();
router.get('/getAll',sensorvaluesController.getAll);
router.get('/getAllFront',sensorvaluesController.getAllFront);
router.post('/insertOne',sensorvaluesController.insertOne);
module.exports=router;
