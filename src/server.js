require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const printMessage = require("./utils/printMessage");
const carRouters = require("./routes/carRoutes");
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use("/api", carRouters);

try {
  server.listen(process.env.SERVER_PORT, () => {
    printMessage.printSuccess(
      `> Servidor rodando em: http://localhost:${process.env.SERVER_PORT}`
    );
  });
} catch (error) {
  printMessage.printError(`Ao iniciar o servidor: ${error}`);
}
