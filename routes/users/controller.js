const { Users } = require("../../models");
const { hashPassword, comparedPassword } = require("../../helpers");

const objectId = require("mongodb").ObjectId

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Users.find().populate('Role_id');

      res.status(200).json({ message: "Show data Users", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    const hash = await hashPassword(req.body.Password);

    try {
      const result = await Users.create({...req.body, Password: hash });
      

      res.status(200).json({ message: "Add new Users", data: result });
      console.log(result);
    } catch (error) {
      res.send({ msg: "error create roles" });
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const result = await Users.find({ _id: req.params.id })

      res.status(200).json({ message: "Show all Users by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Users.remove({ _id: objectId(id) });

      res.status(200).json({
        message: `Data succesfully delete with id ${id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Users.update(
        { _id: objectId(id) },
        { $set: req.body }
      );

      res.status(200).json({
        message: `Data succesfully update with id ${id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
