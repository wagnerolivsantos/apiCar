const formatCarData = (cars) => {
  const jsonCarData = { result: [] };

  for (const i in cars) {
    jsonCarData.result.push({
      id: cars[i].id,
      modelo: cars[i].modelo,
      placa: cars[i].placa,
    });
  }

  return jsonCarData;
};

module.exports = {
  formatCarData,
};
