const Label = require('../../models/label');

module.exports = {
  labels: async (args, req) => {
    //   if(!req.isAuth) {
    //       throw new Error("Unauthenticated");
    //   }
    try {
      const labels = await Label.find();
      return labels;
    } catch (err) {
      throw err;
    }
  }
};
