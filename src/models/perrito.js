import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class perrito extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_perrito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_perrito: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apodo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    raza: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url_imagen: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    edad_perrito: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    'dueño_id': {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dueño',
        key: 'id_dueño'
      }
    }
  }, {
    sequelize,
    tableName: 'perrito',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "perrito_pkey",
        unique: true,
        fields: [
          { name: "id_perrito" },
        ]
      },
    ]
  });
  }
}
