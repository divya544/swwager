const express = require('express')
const app = express.Router()
const productController = require('../controllers/productController')

app
  .route('/createInvoice')
  .post(productController.createInvoice)

module.exports = app
