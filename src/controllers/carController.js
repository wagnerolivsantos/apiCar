const CarService = require("../services/carServices");
const { formatCarData } = require("./utils/formatCarData");
const printMessage = require("../utils/printMessage");

const getAllCars = async (req, res) => {
  try {
    const cars = await CarService.getAllCars();
    const formattedData = formatCarData(cars);
    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ Error: "Interno do servidor" });
  }
};

const getCarById = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await CarService.getCarById(id);

    return car
      ? res.status(200).json({ result: car })
      : res.status(404).json({ error: "Carro não encontrado" });
  } catch (error) {
    return res.status(500).json({ error: "Interno do servidor" });
  }
};

const insertCarData = async (req, res) => {
  try {
    const { modelo: carModel, placa: licensePlate } = req.body;

    if (carModel && licensePlate) {
      const car = await CarService.insertCarData(carModel, licensePlate);

      return car
        ? res.status(200).json({ result: "Registro adicionado com sucesso." })
        : res.status(404).json({ error: "Erro ao inserir dados do carro" });
    }

    return res.status(400).json({
      error: "Parâmetros inválidos",
    });
  } catch (error) {
    return res.status(500).json({ error: "Interno do servidor" });
  }
};

const updateCarRecord = async (req, res) => {
  try {
    const id = req.params.id;
    const { modelo: carModel, placa: licensePlate } = req.body;

    if (id && carModel && licensePlate) {
      const car = await CarService.updateCarRecord(id, carModel, licensePlate);

      if (car.affectedRows == 0) {
        return res
          .status(404)
          .json({ error: "Erro ao atualizar os dados do carro." });
      }

      return res.status(200).json({
        result: "Registro atualizado com sucesso.",
      });
    }

    return res.status(400).json({
      error: "Parâmetros inválidos",
    });
  } catch (error) {
    return res.status(500).json({ error: "Interno do servidor" });
  }
};

const deleteCarById = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const car = await CarService.deleteCarById(id);

      if (car.affectedRows == 0) {
        return res.status(404).json({ error: "Carro não encontrado" });
      }

      return res.status(200).json({ result: "Registro deletado com sucesso." });
    }

    return res.status(400).json({
      error: "Parâmetros inválidos",
    });
  } catch (error) {
    return res.status(500).json({ error: "Interno do servidor" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  insertCarData,
  updateCarRecord,
  deleteCarById,
};
