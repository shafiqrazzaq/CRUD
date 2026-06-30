import express from "express";

import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/", createProduct);

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET SINGLE PRODUCT BY ID
router.get("/:id", getSingleProduct);

// UPDATE PRODUCT BY ID
router.put("/:id", updateProduct);

// DELETE PRODUCT BY ID
router.delete("/:id", deleteProduct);

export default router;