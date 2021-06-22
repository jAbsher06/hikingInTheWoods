const mongoose = require('mongoose');

const clothingSchema = mongoose.Schema({
  item: String,
  priority: String,
  description: String,
  example: Number,
  selection: String,
  bringing: Boolean,
  inHand: Boolean,
  packed: Boolean
}, {
  collection: 'clothing'
});

const Clothing = mongoose.model('Clothing', clothingSchema);

const findClothing = (cb) => {
  Clothing.find().exec(cb);
}

module.exports.findClothing = findClothing;