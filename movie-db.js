require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.URI)

const db = mongoose.connection 

db.on('error',(error)=>{
  console.log('error on connecting db');
})

db.once('connected',()=>{
  console.log('db connected');
})

module.exports={
  db,mongoose
}

