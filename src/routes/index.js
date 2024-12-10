import Express from "express";

import { isAuthorized } from "../services/auth.js";
import { findUser, getProducts, getUsers } from "../controllers/index.js";

const router = Express.Router();

// Route handler
router.get("/", (req, res, next) => {
  res.send("Retailer Shopping");
  next();
});

router.get("/users", isAuthorized, getUsers);

router.get("/users", findUser);

router.get("/products", getProducts);

export default router;
