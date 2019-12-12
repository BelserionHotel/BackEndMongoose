const { Users } = require("../../models");
const { hashPassword, comparedPassword } = require("../../helpers");


module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({}).populate('Role_id');

            res.status(200).json({ message: "Show data Users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        const hash = await hashPassword(req.body.Password);

        try {
            const result = await Users.create({...req.body, Password: hash });

            res.status(200).json({ message: "Add new User", data: result });
        } catch (error) {
            res.send({msg: "error create account"})
            console.log(error);
        }
    }
};
