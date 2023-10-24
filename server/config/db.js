import { Sequelize } from "sequelize";
const db = new Sequelize("openpo", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
