const Client = require('../../models/client');

module.exports = {
  clients: async () => {
    try {
      const clients = await Client.find();
      return clients;
    } catch (err) {
      throw err;
    }
  }
};
