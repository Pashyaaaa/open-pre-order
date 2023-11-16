import express from "express";
//Users
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

// Catalog
import {
  getCatalog,
  getAllCatalog,
  getCatalogById,
  createCatalog,
  updateCatalog,
  deleteCatalog,
} from "../controllers/CatalogController.js";

// Order
import {
  getOrder,
  getOrderById,
  addOrder,
  deleteOrder,
} from "../controllers/OrderController.js";

// Order Detail
import {
  getOrderDetail,
  getOrderDetailById,
} from "../controllers/OrderDetailController.js";

const router = express.Router();

//login and register
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// Catalog
router.get("/catalog", verifyToken, verifyToken, getCatalog);
router.get("/catalog/all", verifyToken, getAllCatalog);
router.get("/catalog/:id", getCatalogById);
router.post("/catalog", createCatalog);
router.patch("/catalog/:id", updateCatalog);
router.delete("/catalog/:id", deleteCatalog);

//Order
router.get("/order", getOrder);
router.get("/order/:id", getOrderById);
router.post("/order", addOrder);
router.delete("/order/:id", deleteOrder);

//Order Detail
router.get("/orderdetail", getOrderDetail);
router.get("/orderdetail/:id", getOrderDetailById);

export default router;
