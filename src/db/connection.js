const { Sequelize } = require("sequalize");

const sequalize = new Sequalize(process.env.MYSQL_URI);
