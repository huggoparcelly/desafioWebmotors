const { StatusCodes } = require('http-status-codes');
const vehicleService = require('../services/vehiclesService');
const dataValidation = require('../middlewares/dataValidation');

const listVehicles = async (_req, res) => {

  const vehicles = await vehicleService.getVehicles();
  res.status(StatusCodes.OK).json(vehicles);
  
};

const createVehicle = async (req, res, next) => {

  const { error } = dataValidation.bodyValidate(req.body);
  if(error) return next(error);

  const newVeihcle = await vehicleService.addVehicle(req.body);

  res.status(StatusCodes.CREATED).json(newVeihcle);
}

const updateVeihcle = async (req, res, next) => {
  const { id } = req.params;
  
  const { error } = dataValidation.bodyValidate(req.body);
  if(error) return next(error);

  const updatedVeihcle = await vehicleService.updatedVehicle(id, req.body);

  if(updatedVeihcle.message) return res.status(updatedVeihcle.statusCode)
    .json({message: updatedVeihcle.message})
  
  res.status(StatusCodes.OK).json(updatedVeihcle);
}

const removeVehicle = async (req, res) => {
  const { id } = req.params;
  const removedVeihcle = await vehicleService.removedVehicle(id);

  if(removedVeihcle.message) return res.status(removedVeihcle.statusCode)
    .json({message: removedVeihcle.message});

  
  res.status(StatusCodes.OK).json(removedVeihcle);
}

const getVehicleById = async (req, res) => {
  const { id } = req.params;

  const vehicle = await vehicleService.getVeihcle(id);

  if(vehicle.message) return res.status(vehicle.statusCode)
    .json({message: vehicle.message});


  res.status(StatusCodes.OK).json(vehicle);
}

module.exports = {
  listVehicles,
  createVehicle,
  updateVeihcle,
  removeVehicle,
  getVehicleById,
}