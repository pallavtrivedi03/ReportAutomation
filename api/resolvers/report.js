const Report = require('../../models/report');

module.exports = {
  createReport: async args => {
    try {
      console.log("Request for create report");

      const report = new Report ({
        label: args.reportInput.label,
        deal: args.reportInput.deal,
        type: args.reportInput.type,
        from: args.reportInput.from,
        to: args.reportInput.to,
        path: args.reportInput.path,
        status: "Pending",
        totalPayout: 334455.43,
        clients: [
            {
                client:"Airtel",
                payout:2345.65,
                services: [{
                    name:"Some Name",
                    payout: 443.44,
                    regionInfo: [{
                        origin:"Domestic",
                        territory:"India",
                        payout:332.23
                    }]
                }]
            }
        ]

      });

      console.log("Report object "+report);
      const result = await report.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
        console.log("error is "+err);
      throw err;
    }
  }
};
