const express = require('express');
const userController = require('../controllers/userController');
const { 
  displayNameValidation, 
  emailValidation, 
  passwordValidation } = require('../middlewares/userMiddleware');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.post(
  '/', 
  displayNameValidation, 
  emailValidation, 
  passwordValidation, 
  userController.createdUSer,
  );

routers.get('/', tokenValidation, userController.findUsers);

module.exports = routers;