const { Roles } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Roles.find({});

            res.status(200).json({ message: "Show data Roles", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await Roles.create(req.body);

            res.status(200).json({ message: "Add new Roles", data: result });
            console.log(result)
        } catch (error) {
            res.send({msg: "error create roles"})
            console.log(error);
        }
    }
};
