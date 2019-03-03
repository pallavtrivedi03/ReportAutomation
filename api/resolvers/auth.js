const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const Employee = require('../../models/employee');

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const existingEmployee = await Employee.findOne({email: args.userInput.email });
      
      if (!existingEmployee) {
        throw new Error('Email id is not registered.');
      }

      var role = "";
      switch(existingEmployee.department) {
        case "Technology":    //TODO: temporary check for development
          role = "admin";
          break;
        case "MIS & BI":
          role = "BI";
          break;
        case "Content Acquisition":
          role = "CA";
          break;
        case "Finance & Accounts":
          role = "FA";
          break;
        default:
          role = "";
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
        role: role
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
};
