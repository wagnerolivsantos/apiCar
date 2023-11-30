const db = require("../config/db");
const printMessage = require("../utils/printMessage");
const handleDatabaseError = require("../database/handleDbError");

db.connect((err) => {
  if (err) {
    handleDatabaseError(err);
  } else {
    printMessage.printSuccess(
      `> Conectado ao banco de dados: ${process.env.DB_DATABASE}`
    );
  }
});

module.exports = db;
