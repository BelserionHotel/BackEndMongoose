const { ReservationCheckouts } = require("../../models");
const objectId = require("mongodb").ObjectId

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await ReservationCheckouts.find().populate('Customer_id');

      res.status(200).json({ message: "Show data ReservationCheckouts", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await ReservationCheckouts.create(req.body);

      res.status(200).json({ message: "Add new ReservationCheckouts", data: result });
      console.log(result);
    } catch (error) {
      res.send({ msg: "error create roles" });
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const result = await ReservationCheckouts.find({ _id: req.params.id })

      res.status(200).json({ message: "Show all ReservationCheckouts by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await ReservationCheckouts.remove({ _id: objectId(id) });

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
      const result = await ReservationCheckouts.update(
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
  },
  deleteAllCheckout: async (req, res) => {
    try {
      const result = await ReservationCheckouts.remove();
      res.status(200).json({
        message: "Data Successfully delete",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
};
