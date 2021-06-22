const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index')
const gear = require('../database/models/Gear.js');
const kitchen = require('../database/models/Kitchen.js');
const clothing = require('../database/models/Clothing.js');
const clothingWorn = require('../database/models/ClothingWorn.js');
const utilities = require('../database/models/Utilities.js');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/pack', (req, res) => {
  gear.findGear((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})
app.get('/kitchen', (req, res) => {
  kitchen.findKitchen((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})
app.get('/clothing', (req, res) => {
  clothing.findClothing((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})
app.get('/clothingWorn', (req, res) => {
  clothingWorn.findClothingWorn((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})
app.get('/utilities', (req, res) => {
  utilities.findUtilities((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MVP app listening on port ${PORT}`);
})
