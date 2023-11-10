import { DataTypes } from "sequelize";

const Catalog = {
  nama_produk: DataTypes.STRING,
  gambar: DataTypes.STRING,
  url: DataTypes.STRING,
  harga: DataTypes.INTEGER,
  publish: DataTypes.BOOLEAN,
};

export default Catalog;
