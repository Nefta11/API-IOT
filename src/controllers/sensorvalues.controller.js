const sensorvaluesDAO=require('../DAO/sensorvalues.dao');
const sensorvaluesController={};
sensorvaluesController.getAll=async(req,res)=>{
    sensorvaluesDAO.getAll()
    .then(values=>{
        res.json(values);
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
    });
}
sensorvaluesController.getAllFront=async(req,res)=>{
    sensorvaluesDAO.getAll()
    .then(values=>{
        res.render('../src/views/index.ejs',{values});
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
    });
}
sensorvaluesController.insertOne=async(req,res)=>{
    sensorvaluesDAO.insertOne(req.body)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
        })
    });
}
module.exports=sensorvaluesController;