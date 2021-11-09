const connection = require('./connection');
require('dotenv').config();

const TABLE_NAME = process.env.TABLE_NAME;

const getAll = async () => {
  const QUERY = `SELECT ID, marca, modelo, versao FROM ${TABLE_NAME};`
  const [vehicles] = await connection.execute(QUERY);
  return vehicles;
}

const create = async (body) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = body;
  const QUERY = `INSERT INTO ${TABLE_NAME} (marca, modelo, versao, ano, quilometragem, observacao) VALUES (?,?,?,?,?,?);`;
  const VALUES = [marca, modelo, versao, ano, quilometragem, observacao];
  await connection.execute(QUERY, VALUES);
  return body;
}

const findById = async (id) => {
  const QUERY = `SELECT * FROM ${TABLE_NAME} WHERE ID=?;`
  const [vehicle] = await connection.execute(QUERY, [id]);
  
  if(vehicle.length === 0) return null;

  return vehicle;
}

const update = async (id, body) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = body;
  const QUERY = `UPDATE ${TABLE_NAME} 
    SET marca=?, modelo=?, versao=?, ano=?, quilometragem=?, observacao=? 
    WHERE ID=?;`;
  const VALUES = [marca, modelo, versao, ano, quilometragem, observacao, id]
  await connection.execute(QUERY, VALUES)
  return body;
}

const remove = async (id) => {
  const QUERY = `DELETE FROM ${TABLE_NAME} WHERE ID=?;`
  await connection.execute(QUERY, [id]);
  return id;
}

module.exports = {
  getAll,
  create,
  update,
  remove,
  findById
}