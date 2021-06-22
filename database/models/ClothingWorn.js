const mongoose = require('mongoose');

const clothingWornSchema = mongoose.Schema({
  item: String,
  priority: String,
  description: String,
  example: Number,
  selection: String,
  bringing: Boolean,
  inHand: Boolean,
  packed: Boolean
}, {
  collection: 'clothingWorn'
});

const ClothingWorn = mongoose.model('ClothingWorn', clothingWornSchema);

const findClothingWorn = (cb) => {
  ClothingWorn.find().exec(cb);
}

module.exports.findClothingWorn = findClothingWorn;