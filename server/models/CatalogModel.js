import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Catalog = db.define(
  "catalog",
  {
    nama_produk: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    publish: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default Catalog;

// fungsi dibawah digunakan untuk men-generete table jika tabel catalog tidak terdapat didatabase
(async () => {
  await db.sync();
})();
