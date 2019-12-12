const express = require("express")
const cors = require("cors")
const jwt = require("express-jwt")
const app = express()
const bodyParser = require("body-parser")
const {PORT, db} = require("./config")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(jwt(
    {secret : "amir"}).unless({
        path: [
            {
                url: "/",
                methods: ["GET"]
            }
        ]
    })
)
app.use((err, req, res, next) => {
    console.log(err);
    
        if (err.name === "UnauthorizedError") {
            return res.status(401).json({
                message: "You are not allow to enter this endpoints"
            });
        }
        return next();
    });

app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));
app.use("/validate", require("./routes/validate"));

app.use("/roles", require("./routes/roles"));
app.use("/roomTypes", require("./routes/roomTypes"));
app.use("/rooms", require("./routes/rooms"));
app.use("/customers", require("./routes/customers"));
app.use("/reservations", require("./routes/reservations"));
app.use("/reservationRooms", require("./routes/reservationRooms"));
app.use("/reservationCheckouts", require("./routes/reservationCheckouts"));


if(db) {
    app.listen(PORT, () => {
        console.log(`this app run on port ${PORT}`);
    })

}

