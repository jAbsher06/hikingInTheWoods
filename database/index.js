const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/mvp';


const db = mongoose.connect(mongoURI, { useNewURLParser: true, useUnifiedTopology: true })


db
  .then(() => {
    console.log('Mongoose is connected!');
  })
  .catch((error) => {
    console.log('Mongoose error: ', error);});
module.exports = db;