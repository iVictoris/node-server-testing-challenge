const knex = require("knex");
const config = require("../knexfile.js");
const dbEnv = process.env.NODE_ENV || "development";

const db = knex(config[dbEnv]);

// export for use in codebase
module.exports = db;
