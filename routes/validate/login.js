// const { get } = require("../../config");
const { Users } = require("../../models");

const { comparedPassword } = require("../../helpers");

const login = async ({ email, password }) => {
  try {
    const result = {};

    if (!email) {
      result.email = "You must enter a value";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      result.email = "email format is wrong";
    }

    if (!password) {
      result.password = "You must enter a value";
    } else if (password) {
      const data = await Users.findOne({ email: email });

      console.log(data);

      if (data) {
        const compared = await comparedPassword(password, data.password);
        compared === false && (result.password = "Password is wrong");
      } else if (data === null) {
        result.password = "Email not registered";
      }
    }

    return result;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

module.exports = login;
