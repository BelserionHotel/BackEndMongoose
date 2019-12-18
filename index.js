const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, db, JWT_SECRET_KEY } = require("./config");
const helmet = require("helmet");
const jwt = require("express-jwt");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("assets/images/"));
app.use(helmet.frameguard({ action: "sameorigin" }));
// JWT
app.use(
    jwt({ secret: JWT_SECRET_KEY }).unless({
        path: [
            {
                url: "/",
                methods: ["GET"]
            },
            {
                url: "/users",
                methods: ["POST"]
            },
            {
                url: "/rooms/availables",
                methods: ["GET"]
            },
            {
                url: "/users/login",
                methods: ["POST", "GET"]
            },
            {
                url: /^\/validate\/[\w]{1,}[\w\-]{1,}/i,
                methods: ["POST"]
            }
        ]
    })
);

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.status(401).json({
            message: "You are not allow to enter this endpoints"
        });
    }
    return next();
});

//routing ways
app.use("/", require("./routes"));
app.use("/validate", require("./routes/validate"));
app.use("/users", require("./routes/users"));
app.use("/rooms", require("./routes/rooms"));
app.use("/roomTypes", require("./routes/roomTypes"));
app.use("/reservationCheckouts", require("./routes/reservationCheckouts"));
app.use("/reservationRooms", require("./routes/reservationRooms"));
app.use("/roles", require("./routes/roles"));

if (db) {
    app.listen(PORT, () => {
        console.log(`THIS APP LISTEN ON PORT ${PORT}`);
    });
} else {
    console.log("Something is wrong, of database");
}
