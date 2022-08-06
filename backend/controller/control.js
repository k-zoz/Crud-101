const Product = require("../model/model");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getProduct = asyncWrapper(async (req, res) => {
  const product = await Product.find({});
  res.status(200).json({ product });
});

const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

const getSingleProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  if (!product) {
    return next(createCustomError(`no product with ${productID}`, 404));
  }
  res.status(200).json({ product });
});

const deleteProduct = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });
  if (!product) {
    return next(createCustomError(`no product with ${productID}`, 404));
  }
  res.status(200).json({ product });
});

//patch request-partial update
const updateProduct = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(createCustomError(`no product with ${productID}`, 404));
  }
  res.status(200).json({ product });
});

//PUT request completely replace the item
const editTask = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
});

module.exports = {
  getProduct,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  editTask,
};
