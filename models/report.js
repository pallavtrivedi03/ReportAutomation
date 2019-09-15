const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  deal: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  totalPayout: {
    type: SchemaTypes.Double,
    required: true
  },
  clients:[{
    client: String,
    payout: SchemaTypes.Double,
    services: [{
        name: String,
        payout: SchemaTypes.Double,
        regionInfo: [{
            origin: String,
            territory: String,
            payout: SchemaTypes.Double
        }]
    }]
  }]
});

module.exports = mongoose.model('Report', reportSchema);
