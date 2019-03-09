const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  services:[{
    name: String,
    regionInfo: [{
      origin: String,
      territory: String
    }]
  }]
});

module.exports = mongoose.model('Client', clientSchema);
