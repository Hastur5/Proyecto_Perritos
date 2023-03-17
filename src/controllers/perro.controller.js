import { sequelize } from '../database/database.js';
import modelosInit from '../models/init-models.js'
import { Op } from 'sequelize'

const models = modelosInit(sequelize)

export const getAllPerro = async (req, res) => {
  let response;
  try {
    response = await models.perrito.findAll();
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
  res.status(200).json(response);
};
