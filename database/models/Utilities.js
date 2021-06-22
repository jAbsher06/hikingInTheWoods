const mongoose = require('mongoose');

const utilitiesSchema = mongoose.Schema({
  item: String,
  priority: String,
  description: String,
  example: Number,
  selection: String,
  bringing: Boolean,
  inHand: Boolean,
  packed: Boolean
});

const Utilities = mongoose.model('Utilities', utilitiesSchema);

const findUtilities = (cb) => {
  Utilities.find().exec(cb);
}

module.exports.findUtilities = findUtilities;