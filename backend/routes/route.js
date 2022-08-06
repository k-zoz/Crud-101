const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  editTask,
} = require("../controller/control");

router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
router.put("/:id", editTask);
module.exports = router;
