import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import {
  getCatalog,
  getCatalogById,
  createCatalog,
  updateCatalog,
  deleteCatalog,
} from "../controllers/CatalogController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

//login and register
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// Catalog
router.get("/catalog", getCatalog);
router.get("/catalog/:id", getCatalogById);
router.post("/catalog", createCatalog);
router.patch("/catalog/:id", updateCatalog);
router.delete("/catalog/:id", deleteCatalog);

export default router;
