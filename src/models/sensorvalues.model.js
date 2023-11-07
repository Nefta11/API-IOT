const {Schema,model}=require('mongoose');
const sensorvaluesSchema=new Schema({
    humidity:Number,
    temperaturec:Number,
    temperaturef:Number,
    heatindexc:Number,
    heatindexf:Number
},{
    versionKey:false,
    timestamps:true
});

module.exports=model('sensorvalues',sensorvaluesSchema);