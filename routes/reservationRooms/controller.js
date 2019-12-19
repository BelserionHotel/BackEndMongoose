const { ReservationRooms, Customers, Rooms } = require("../../models");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await ReservationRooms.find().populate("Customer_id").populate("Room_id");

      res
        .status(200)
        .json({ message: "Show data ReservationRooms", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await ReservationRooms.create(req.body);

      res
        .status(200)
        .json({ message: "Add new ReservationRooms", data: result });
      console.log(result);
    } catch (error) {
      res.send({ msg: "error create Reservation Rooms" });
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const result = await ReservationRooms.findById(req.params.id).populate("Customer_id").populate("Room_id");

      res
        .status(200)
        .json({ message: "Show all ReservationRooms by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  ugetById: async (req, res) => {
    try {
      const result = await ReservationRooms.find({Customer_id:req.params.id})
      console.log(req.params.id);
      

      res
        .status(200)
        .json({ message: "Show all ReservationRooms by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await ReservationRooms.remove({ _id: objectId(id) });

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
      const result = await ReservationRooms.update(
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
  
  bookingRooms: async (req, res) => {
    const {
      StartDateTime,
      DurationNights,
      RoomPrice,
      CheckInDateTime,
      CheckOutDateTime
    } = req.body;
    const customer = res.locals.Customer_id;
    const Room = res.locals.Room_id;

    const booking = new ReservationRooms({
      StartDateTime,
      DurationNights,
      RoomPrice,
      CheckInDateTime,
      CheckOutDateTime
    });

    ReservationRooms.findById(Customer_id._id).populate
  }
};
