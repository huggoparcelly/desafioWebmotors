const vehicleModel = require('../models/vehicleModel');
const dataValidation = require('../middlewares/dataValidation');


const getVehicles = async () => vehicleModel.getAll();

const addVehicle = async (body) => vehicleModel.create(body);

const updatedVehicle = async(id, body) => {
  const notExistId = await dataValidation.existId(id);
  if(notExistId) return notExistId;
  
  return vehicleModel.update(id, body);
}

const removedVehicle = async(id) => {
  const notExistId = await dataValidation.existId(id);
  if(notExistId) return notExistId;

  return vehicleModel.remove(id);
}

const getVeihcle = async(id) => {
  const notExistId = await dataValidation.existId(id);
  if(notExistId) return notExistId;

  return vehicleModel.findById(id);
}

module.exports = {
  getVehicles,
  addVehicle,
  updatedVehicle,
  removedVehicle,
  getVeihcle
}

