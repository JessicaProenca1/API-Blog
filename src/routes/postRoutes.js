const express = require('express');
const postController = require('../controllers/postController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.post('/', tokenValidation, postController.newPost);

routers.get('/', tokenValidation, postController.findAllPosts);

module.exports = routers;