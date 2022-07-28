const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const {GenerateError, ServerError} = require('../../helpers/errors');

router.post('/', async (req, res) => {
  try {
    console.log(`heeeeee####${req.body}`);
    const product = new Product({
      ...req.body,
    });

    const response = await product.save();
    if (!response) return ServerError(res, 'Opps!Something went wrong!');

    res.send({product});
  } catch (err) {
    GenerateError(res, err);
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({products});
  } catch (err) {
    GenerateError(res, err);
  }
});

module.exports = router;
