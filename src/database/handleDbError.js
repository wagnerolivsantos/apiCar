const printMessage = require("../utils/printMessage");

function handleDatabaseError(error) {
  switch (error.code) {
    case "ER_ACCESS_DENIED_ERROR":
      printMessage.printError(
        `A tentativa de conexão ao banco de dados foi negada devido a credenciais de acesso incorretas.`
      );
      break;
    case "ER_BAD_DB_ERROR":
      printMessage.printError(
        `O banco de dados "${process.env.DB_DATABASE}" solicitado não existe`
      );
      break;
    case "ER_CON_COUNT_ERROR":
      printMessage.printError(
        `O número máximo de conexões ao banco de dados foi atingido.`
      );
      break;
    case "ER_CONN_HANDSHAKE_ERROR":
      printMessage.printError(
        `durante o handshake com o servidor do banco de dados.`
      );
      break;
    case "ER_NET_PACKET_TOO_LARGE":
      printMessage.printError(
        `O pacote de rede enviado ao servidor é muito grande.`
      );
      break;
    case "ER_TABLE_EXISTS_ERROR":
      printMessage.printError(
        `A tabela que você está tentando criar já existe.`
      );
      break;
    case "ER_NO_SUCH_TABLE":
      printMessage.printError(
        `A tabela que você está tentando acessar não foi encontrada no banco de dados.`
      );
      break;
    case "ER_DUP_ENTRY":
      printMessage.printError(`Violou uma restrição de chave única.`);
      break;
    case "ECONNREFUSED":
      printMessage.printError(`A conexão com o banco de dados foi recusada.`);
      break;
    case "PROTOCOL_CONNECTION_LOST":
      printMessage.printError(`A conexão com o banco de dados foi perdida.`);
      break;
    case "ETIMEDOUT":
      printMessage.printError(
        `A conexão com o banco de dados expirou devido ao tempo limite.`
      );
      break;
    case "ER_HOST_IS_BLOCKED":
      printMessage.printError(
        `O host foi bloqueado devido a muitas tentativas de conexão com falha.`
      );
      break;

    default:
      printMessage.printError(`${error.message}. ${error.code}`);
      break;
  }
}

module.exports = handleDatabaseError;
