const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  band: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  manager_code: {
    type: String,
    required: true
  },
  manager_name: {
    type: String,
    required: true
  },
  hod_code: {
    type: String,
    required: true
  },
  hod_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  is_active: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
