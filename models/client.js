const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  territory: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  service_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Client', clientSchema);
