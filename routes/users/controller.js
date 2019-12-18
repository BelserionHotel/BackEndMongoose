const { get, JWT_SECRET_KEY } = require("../../config");
const objectId = require("mongodb").ObjectId;
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");
const { Users } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
          const result = await Users.find();
    
          res.status(200).json({ message: "Show data RoomTypes", data: result });
        } catch (error) {
          console.log(error);
        }
      },
    getById: (req, res) => {
        const { id } = req.params;

        get()
            .collection("users")
            .findOne({ _id: objectId(id) })
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
    addOne: async (req, res) => {
        try {
            const hash = await hashPassword(req.body.password);

          const result = await Users.create({...req.body, password : hash});
    
          res.status(201).json({ message: "Add new RoomTypes", data: result });
          console.log(result);
        } catch (error) {
          res.send({ msg: "error create roles" });
          console.log(error);
        }
      },
    // addOne: async (req, res) => {
    //     console.log(req.body);
        
    //     const hash = await hashPassword(req.body.password);

    //     get()
    //         .collection("users")
    //         .insertOne({...req.body, password: hash })
    //         .then(result => {
    //             res.status(201).json({
    //                 message: "Data successfully added",
    //                 data: result
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    updateOne: (req, res) => {
        const { id } = req.params;
        get()
            .collection("users")
            .updateOne({ _id: objectId(id) }, { $set: req.body })
            .then(result => {
                res.send({
                    message: `Data successfully update with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    login: async (req, res) => {
        // console.log(req.body);
        try {
          const result = await Users.findOne({ email: req.body.email })
          const compared = await comparedPassword(
            req.body.password,
            result.password
        );
        console.log(compared);
        

        
               

                
      
         

          console.log(result);
        //   console.log(result[0].email);
        if(compared === false) {
            res.send({ message: "failed login", data: result })

        } else {
            const token = jwt.sign(
                { email: req.body.email,
                id : result._id },
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
      },
    logina: async (req, res) => {
        const { body } = req;
        console.log(body);
        

        get()
            .collection("users")
            .findOne({ email: body.email })
            .then(async response => {
                const compared = await comparedPassword(
                    req.body.password,
                    response.password
                );

                if (compared === true) {
                    const { _id, email, firstName } = response;
                    const token = jwt.sign(
                        { id: _id, email, firstName },
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
            });
    }
};
