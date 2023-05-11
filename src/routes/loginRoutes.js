const express = require('express');
const loginController = require('../controllers/loginController');
const { incompleteLogin } = require('../middlewares/loginMiddleware');

const routers = express.Router();

routers.post('/', incompleteLogin, loginController.login);

module.exports = routers;