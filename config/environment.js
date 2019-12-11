require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 5006,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME
};
