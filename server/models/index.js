import db from "../config/db.js";
import Order from "./OrderModel.js";
import Users from "./UserModel.js";
import Catalog from "./CatalogModel.js";
import OrderDetail from "./OrderDetailModel.js";

const catalog = db.define("catalog", Catalog, {
  tableName: "catalog",
  timestamps: false,
  timezone: "+07:00",
});
const order = db.define("order", Order, {
  tableName: "order",
  timestamps: false,
  timezone: "+07:00",
});
const orderDetail = db.define("order_detail", OrderDetail, {
  tableName: "order_detail",
  underscored: true,
  timestamps: false,
  timezone: "+07:00",
});

order.hasMany(orderDetail, {
  foreignKey: "order_id",
  as: "order_details",
});

orderDetail.belongsTo(order, {
  foreignKey: "order_id",
  as: "order",
});

catalog.hasMany(orderDetail, {
  foreignKey: "catalog_id",
});

orderDetail.belongsTo(catalog, {
  foreignKey: "catalog_id",
  as: "catalog",
});

db.define("users", Users, {
  tableName: "users",
  freezeTableName: true,
  timestamps: false,
  timezone: "+07:00",
});
db.sync();

export default db;
