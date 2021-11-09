const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const { findById } = require('../models/vehicleModel');

const bodyValidate = (body) => Joi.object({
   marca: Joi.string().max(45).required(),
   modelo: Joi.string().max(45).required(),
   versao: Joi.string().max(45).required(),
   ano: Joi.number().integer().required(),
   quilometragem: Joi.number().integer().required(),
   observacao: Joi.string().required(),
 }).validate(body);


const existId = async (id) => {
  const findVehicle = await findById(id);
  
  if(!findVehicle) {
    const err = new Error('Vehicle not found');
    err.statusCode = StatusCodes.NOT_FOUND;
    return err;
  }

};

module.exports = {
  bodyValidate,
  existId
}