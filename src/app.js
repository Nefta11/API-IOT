const express=require('express');
const morgan=require('morgan');
const sensorvaluesRouter=require('./routes/sensorvalues.router');
const app=express();
//Settings
app.set('PORT',process.env.PORT || 3000);
app.set('view engine','ejs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/api',sensorvaluesRouter);

module.exports=app;
