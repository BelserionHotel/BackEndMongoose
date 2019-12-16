const { PORT, DATABASE_HOST, DATABASE_NAME } = require("./environment");
const db = require("./connection");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

module.exports = {
    PORT: PORT,
    DATABASE_HOST: DATABASE_HOST,
    DATABASE_NAME: DATABASE_NAME,
    db: db,JWT_SECRET_KEY
};
