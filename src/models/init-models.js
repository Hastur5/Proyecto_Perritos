import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _dueño from  "./dueño.js";
import _perrito from  "./perrito.js";

export default function initModels(sequelize) {
  const dueño = _dueño.init(sequelize, DataTypes);
  const perrito = _perrito.init(sequelize, DataTypes);

  perrito.belongsTo(dueño, { as: "dueño", foreignKey: "dueño_id"});
  dueño.hasMany(perrito, { as: "perritos", foreignKey: "dueño_id"});

  return {
    dueño,
    perrito,
  };
}
