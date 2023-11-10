import { DataTypes } from "sequelize";

const Order = {
  nama: DataTypes.STRING,
  whatsapp: DataTypes.STRING,
  alamat: DataTypes.STRING,
  tanggal_order: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  tanggal_ambil: DataTypes.DATE,
};

export default Order;
