const mongoose = require('mongoose');

const kitchenSchema = mongoose.Schema({
  item: String,
  priority: String,
  description: String,
  example: Number,
  selection: String,
  bringing: Boolean,
  inHand: Boolean,
  packed: Boolean,
  quantity: Number
}, {
  collection: 'kitchen'
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);

const findKitchen = (cb) => {
  Kitchen.find().exec(cb);
}

module.exports.findKitchen = findKitchen;