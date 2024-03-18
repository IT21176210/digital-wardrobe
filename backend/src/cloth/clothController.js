var clothService = require("./clothServices");

var getDataControllerfn = async (req, res) => {
  try {
    var clothData = await clothService.getDataFromDBService();
    res
      .status(200)
      .json({
        status: true,
        data: clothData,
        message: "Data retrieved successfully",
      });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// Function to find the specific cloth
var findClothController = async (req, res) => {
  try {
    var result = await clothService.getClothDBService(req.params.id);
    if (result) {
      res
        .status(200)
        .json({ status: true, data: result, message: "Cloth found" });
    } else {
      res.status(404).json({ status: false, message: "Cloth not found" });
    }
  } catch (error) {
    console.error("Error finding cloth:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// Function to create new cloths
var createClothControllerFn = async (req, res) => {
  try {
    var status = await clothService.createClothDBService(req.body);
    if (status) {
      res
        .status(201)
        .json({ status: true, message: "Cloth created successfully" });
    } else {
      res
        .status(400)
        .json({ status: false, message: "Error creating cloth" });
    }
  } catch (error) {
    console.error("Error creating cloth:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// Function to update specific cloth details
var updateClothController = async (req, res) => {
  try {
    var result = await clothService.updateClothDBService(
      req.params.id,
      req.body
    );
    if (result) {
      res
        .status(200)
        .json({ status: true, message: "Cloth updated successfully" });
    } else {
      res.status(404).json({ status: false, message: "Cloth not found" });
    }
  } catch (error) {
    console.error("Error updating cloth:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// Function to delete specifi cloth
var deleteClothController = async (req, res) => {
  try {
    var result = await clothService.removeClothDBService(req.params.id);
    if (result) {
      res
        .status(200)
        .json({ status: true, message: "Cloth deleted successfully" });
    } else {
      res.status(404).json({ status: false, message: "Cloth not found" });
    }
  } catch (error) {
    console.error("Error deleting cloth:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


module.exports = {
  getDataControllerfn,
  createClothControllerFn,
  updateClothController,
  deleteClothController,
  findClothController,
};
