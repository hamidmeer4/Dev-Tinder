const express = require("express");
const router = express.Router();
const authMiddleware = require("./middleware/auth-middleware")
const {
  getProducts,
  getProductById,
  addProducts,
  updateProduct,
  deleteProduct,
} = require("./product-controller");

// router.post("/login", login);

router.use(authMiddleware);
router.get("/getProducts",getProducts)
router.get("/:id",getProductById)
router.post("/addProduct",addProducts)
router.put("/updateProduct/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports = router;

