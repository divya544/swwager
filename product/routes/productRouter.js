const express = require('express')
const Joi = require('joi')

const masterController = require('../controllers/productController')

adminRouter.post('/addData', masterController.addDetails)

  .put('/dropDown', masterController.putDropDown)

// router.post("/login",userController.userLogin)

module.exports = adminRouter
