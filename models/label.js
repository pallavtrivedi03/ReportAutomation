const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labelSchema = new Schema({
  vendor: {
    type: String,
    required: true
  },
  agreements:[{
    agreementNumber: String,
    effectiveDate: String,
    endDate: String, 
    deal: String
  }] 
});

module.exports = mongoose.model('Label', labelSchema);
