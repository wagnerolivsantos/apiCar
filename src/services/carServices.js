const db = require("../database/db");
const handleDatabaseError = require("../database/handleDbError");

const getAllCars = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM car", (error, results) => {
      error ? reject(handleDatabaseError(error)) : resolve(results);
    });
  });
};

const getCarById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM car WHERE id = ?";

    db.query(query, [id], (error, results) => {
      error
        ? reject(handleDatabaseError(error))
        : resolve(results.length > 0 ? results[0] : null);
    });
  });
};

const insertCarData = (carModel, licensePlate) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO car (modelo, placa) VALUES (?,?)";

    db.query(query, [carModel, licensePlate], (error, results) => {
      if (error) {
        reject(handleDatabaseError(error));
      }
      resolve(results);
    });
  });
};

const updateCarRecord = (id, carModel, licensePlate) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE car SET modelo = ?, placa = ? WHERE id = ?";

    db.query(query, [carModel, licensePlate, id], (error, results) => {
      if (error) {
        reject(handleDatabaseError(error));
      }
      resolve(results);
    });
  });
};

const deleteCarById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM car WHERE id= ?", [id], (error, results) => {
      if (error) {
        reject(handleDatabaseError(error));
      }
      resolve(results);
    });
  });
};

module.exports = {
  getAllCars,
  getCarById,
  insertCarData,
  updateCarRecord,
  deleteCarById,
};
