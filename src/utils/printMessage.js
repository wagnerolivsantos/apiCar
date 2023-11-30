function applyStyleTerminal(settings, message) {
  const resetStyle = "\x1b[0m";

  switch (settings.length) {
    case 1:
      console.log(`${settings}%s${resetStyle}`, message);
      break;

    case 2:
      console.log(`${settings[0]}%s${settings[1]}${resetStyle}`, message);
      break;
  }
}

function printError(message) {
  const backgroundColor = "\x1b[1;41m";
  const textColor = "\x1b[32m";
  const messageError = `[Error]: ${message}`;

  applyStyleTerminal([backgroundColor, textColor], messageError);
}

function printSuccess(message) {
  const textColor = "\x1b[1;34m";
  applyStyleTerminal([textColor], message);
}

module.exports = {
  printError,
  printSuccess,
};
