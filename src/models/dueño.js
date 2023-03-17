import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dueño extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    'id_dueño': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    edad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dueño',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dueño_pkey",
        unique: true,
        fields: [
          { name: "id_dueño" },
        ]
      },
    ]
  });
  }
}
