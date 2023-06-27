const  express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('dotenv').config();
app.use(bodyparser.json());
const mongoose = require('mongoose');
mongoose.connect(process.env.URI)
const db = mongoose.connection 

db.on('error',(error)=>{
  console.log('error on connecting db');
})

db.once('connected',()=>{
  console.log('db connected');
})

app.get('/',function(req,res){
    res.send("The server is started");
})

const route = require('./routes/userroute');
app.use('/user',route);

app.listen(3000,()=>{console.log("server started")});