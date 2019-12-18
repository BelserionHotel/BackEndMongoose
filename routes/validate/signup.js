// const { get } = require("../../config");
const { Users } = require("../../models");

const signup = async ({ email, password, name }) => {
    try {
        const result = {};
        const data = await Users.findOne({ email: email })
        // const data = await get()
        //     .collection("users")
        //     .findOne({ email: email });

        if (!email) {
            result.email = "u must enter a value";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "email format is wrong";
        }
         else if (email) {
            if (data) {
                result.email = "Email is already registered";
            }
        }

        if (!password) {
            result.password = "u must enter a value";
        } else if (password.length < 8) {
            result.password = "Password minimum 8 character";
        }

        if (!name) {
            result.name = "u must enter a value";
        }


        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = signup;
