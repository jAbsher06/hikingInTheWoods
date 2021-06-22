const mongoose = require('mongoose');

const gearSchema = mongoose.Schema({
  item: String,
  priority: String,
  description: String,
  example: Number,
  selection: String,
  bringing: Boolean,
  inHand: Boolean,
  packed: Boolean
}, {
  collection: 'gear'
});

const Gear = mongoose.model('Gear', gearSchema);

const findGear = (cb) => {
  Gear.find().exec(cb);
}

module.exports.findGear = findGear;