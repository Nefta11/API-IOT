const SensorValues=require('../models/sensorvalues.model');
const sensorvaluesDAO={};
sensorvaluesDAO.getAll=async()=>{
    const values=await SensorValues.find();
    return values;
}
sensorvaluesDAO.insertOne=async(values)=>{
    const sensorvaluesSaved=new SensorValues(values);
    await sensorvaluesSaved.save();
    return "values saved";
}

module.exports=sensorvaluesDAO;