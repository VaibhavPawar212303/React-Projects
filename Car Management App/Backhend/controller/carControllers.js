const fsPromises = require("fs").promises;
const fs = require("fs");
const carData = require("../carData/carData.json");

const getCar = (req, res) => {
  res.status(200).json({ carData });
};

const createCar = (req, res) => {
  const { carName, carDetails, Manufacturer, TopSpeed, Color, spoilers } =
    req.body;
  if (!carName) {
    res.status(400);
    throw new Error("Please add the car name");
  } else if (!carDetails) {
    res.status(400);
    throw new Error("Please add the car details");
  } else if (!Manufacturer) {
    res.status(400);
    throw new Error("Please add the manufacturer");
  } else if (!TopSpeed) {
    res.status(400);
    throw new Error("Please add the top speed");
  } else if (!Color) {
    res.status(400);
    throw new Error("Please add the color");
  } else if (!spoilers) {
    res.status(400);
    throw new Error("Please add the spoilers");
  } else {
    fsPromises
      .readFile(
        "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
        "utf-8"
      )
      .then((data) => {
        let json = JSON.parse(data);
        json.push({
          newCar: {
            id: json.length + 1,
            carName: `${carName}`,
            carDetails: `${carDetails}`,
            Manufacturer: `${Manufacturer}`,
            TopSpeed: `${TopSpeed}`,
            Color: `${Color}`,
            spoilers: `${spoilers}`,
          },
        });
        fsPromises
          .writeFile(
            "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
            JSON.stringify(json)
          )
          .then(() => {
            res.status(200).json({
              newCar: {
                id: json.length + 1 - 1,
                carName: `${carName}`,
                carDetails: `${carDetails}`,
                Manufacturer: `${Manufacturer}`,
                TopSpeed: `${TopSpeed}`,
                Color: `${Color}`,
                spoilers: `${spoilers}`,
              },
            });
          })
          .catch((err) => {
            res.status(400);
            throw new Error("Append Failed: " + err);
          });
      });
  }
};

const updateCar = (req, res) => {
  const id = req.params.id;
  const { carName, carDetails, Manufacturer, TopSpeed, Color, spoilers } =
    req.body;

  fsPromises
    .readFile(
      "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
      "utf-8"
    )
    .then((data) => {
      let json = JSON.parse(data);
      var arrayLen = json.length;
      for (var i = 0; i < arrayLen; i++) {
        if (json[i].newCar.id == id) {
          json[i].newCar.carName = `${carName}`;
          json[i].newCar.carDetails = `${carDetails}`;
          json[i].newCar.Manufacturer = `${Manufacturer}`;
          json[i].newCar.TopSpeed = `${TopSpeed}`;
          json[i].newCar.Color = `${Color}`;
          json[i].newCar.spoilers = `${spoilers}`;
        }
      }

      fsPromises
        .writeFile(
          "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
          JSON.stringify(json)
        )
        .then(() => {
          res.status(200).json(json[id - 1].newCar);
        });
    });
};

const deleteCar = (req, res) => {
  const id = req.params.id;
  fsPromises
    .readFile(
      "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
      "utf-8"
    )
    .then((data) => {
      let json = JSON.parse(data);
      for (var i = 0; i < json.length; i++) {
        if (json[i].newCar.id == id) {
          json.splice(i, 1);
        }
      }
      fsPromises
        .writeFile(
          "D:/REACT/ReactCar Project/Backhend/carData/carData.json",
          JSON.stringify(json)
        )
        .then(() => {
          res.status(200).json({ message: `car deleted ${id}` });
        });
    });
};

module.exports = {
  getCar,
  createCar,
  updateCar,
  deleteCar,
};
