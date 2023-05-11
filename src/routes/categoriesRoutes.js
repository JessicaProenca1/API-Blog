const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.post('/', tokenValidation, categoriesController.newCategory);

routers.get('/', tokenValidation, categoriesController.findCategories);

module.exports = routers;