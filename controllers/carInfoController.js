const CarInfo = require('../models/CarInfo');

// Create a new car info
exports.createCarInfo = async (req, res) => {
  try {
    const newCarInfo = new CarInfo(req.body);
    await newCarInfo.save();
    res.status(201).json(newCarInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all car info
exports.getAllCarInfo = async (req, res) => {
  try {
    const carInfoList = await CarInfo.find();
    res.json(carInfoList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single car info
exports.getCarInfoById = async (req, res) => {
  try {
    const carInfo = await CarInfo.findById(req.params.id);
    if (!carInfo) {
      return res.status(404).json({ message: 'Car info not found' });
    }
    res.json(carInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update car info
exports.updateCarInfo = async (req, res) => {
  try {
    const updatedCarInfo = await CarInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCarInfo) {
      return res.status(404).json({ message: 'Car info not found' });
    }
    res.json(updatedCarInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete car info
exports.deleteCarInfo = async (req, res) => {
  try {
    const deletedCarInfo = await CarInfo.findByIdAndDelete(req.params.id);
    if (!deletedCarInfo) {
      return res.status(404).json({ message: 'Car info not found' });
    }
    res.json({ message: 'Car info deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
