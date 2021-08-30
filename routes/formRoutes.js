const formController = require('../controller/formController')
const express = require('express')
const route = express.Router()

route.post("/saveFm", formController.saveForm);
  
route.get("/getAcc", formController.getAccount);

module.exports = route