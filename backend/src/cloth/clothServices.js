const { CURSOR_FLAGS } = require("mongodb");
const jwt = require("jsonwebtoken");
var clothModel = require("./clothModel");

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    clothModel
      .find({})
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};
module.exports.getClothDBService = (id) => {
  return new Promise((resolve, reject) => {
    clothModel
      .findById(id)
      .then((result) => resolve(result))
      .catch((error) => {
        console.log("Error caused whie fetching :id " + error);
      });
  });
};

module.exports.createClothDBService = (clothDetails) => {
  return new Promise((resolve, reject) => {
    var clothModelData = new clothModel();
    clothModelData.name = clothDetails.name;
    clothModelData.category = clothDetails.category;
    clothModelData.price = clothDetails.price;
    clothModelData.description = clothDetails.description;
    clothModelData.ImageUrl = clothDetails.ImageUrl;

    clothModelData
      .save()
      .then((result) => resolve(true))
      .catch((error) => reject(false));
  });
};

module.exports.updateClothDBService = (id, clothDetails) => {
  return new Promise((resolve, reject) => {
    clothModel
      .findByIdAndUpdate(id, clothDetails)
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};

module.exports.removeClothDBService = (id) => {
  return new Promise((resolve, reject) => {
    clothModel
      .findByIdAndDelete(id)
      .then((result) => resolve(result))
      .catch((error) => reject(false));
  });
};
