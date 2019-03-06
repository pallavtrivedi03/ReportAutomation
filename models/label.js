const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labelSchema = new Schema({
  agreement_number: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  effective_date: {
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  deal: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Label', labelSchema);
