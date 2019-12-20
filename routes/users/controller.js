const { get, JWT_SECRET_KEY } = require("../../config");
const objectId = require("mongodb").ObjectId;
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");
const { Users, ReservationRooms, Rooms } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find();

            res.status(200).json({
                message: "Show data RoomTypes",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        const { id } = req.params;

        Users.findOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Get data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteOne: (req, res) => {
        const { id } = req.params;

        get()
            .collection("users")
            .deleteOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Delete data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    delete: (req, res) => {
        const { id } = req.params;

        get()
            .collection("users")
            .delete()
            .then(result => {
                res.send({
                    message: `Delete data user`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    addOne: async (req, res) => {
        try {
            const hash = await hashPassword(req.body.password);

            const result = await Users.create({ ...req.body, password: hash });

            res.status(201).json({
                message: "Add new RoomTypes",
                data: result
            });
            console.log(result);
        } catch (error) {
            res.send({ msg: "error create roles" });
            console.log(error);
        }
    },
    updateOne: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(req.body);
            

            const { request, arrival, Room_id, ...rest } = req.body;

            const user = await Users.updateOne(
                { _id: objectId(id) },
                { $set: rest }
            );

            const room = await Rooms.findById(Room_id).populate("RoomType_id");
            const date1 = new Date(req.body.CheckInDate);
            const date2 = new Date(req.body.CheckOutDate);

            const Difference_In_Time = date2.getTime() - date1.getTime();

            const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

            const reservation = await ReservationRooms.create({
                Request: request,
                ArrivalTime: arrival,
                Customer_id: id,
                Room_id,
                RoomPrice: room.RoomType_id.RoomPrice,
                DurationNights: Difference_In_Days
            });

            res.send({
                message: `Data successfully update with id ${id}`,
                data: { user, reservation }
            });
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        // console.log(req.body);
        try {
            const result = await Users.findOne({ email: req.body.email });
            const compared = await comparedPassword(
                req.body.password,
                result.password
            );
            // console.log(compared);

            // console.log(result);
            //   console.log(result[0].email);
            if (compared === false) {
                res.send({ message: "failed login", data: result });
            } else {
                const token = jwt.sign(
                    { email: req.body.email, id: result._id },
                    JWT_SECRET_KEY,
                    {
                        expiresIn: "30d"
                    }
                );
                res.status(200).json({
                    message: "Login successfull",
                    data: token
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};
