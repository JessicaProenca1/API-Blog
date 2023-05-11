const express = require('express');
const userController = require('../controllers/userController');
const { 
  displayNameValidation, 
  emailValidation, 
  passwordValidation } = require('../middlewares/userMiddleware');

const routers = express.Router();

routers.post(
  '/', 
  displayNameValidation, 
  emailValidation, 
  passwordValidation, 
  userController.createdUSer,
  );

module.exports = routers;