const { Customers } = require("../../models");
const objectId = require("mongodb").ObjectId

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Customers.find().populate('User_id');

      res.status(200).json({ message: "Show data Customers", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await Customers.create(req.body);

      res.status(200).json({ message: "Add new Customers", data: result });
      console.log(result);
    } catch (error) {
      res.send({ msg: "error create roles" });
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const result = await Customers.find({ _id: req.params.id })

      res.status(200).json({ message: "Show all Customers by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Customers.remove({ _id: objectId(id) });

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
      const result = await Customers.update(
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
