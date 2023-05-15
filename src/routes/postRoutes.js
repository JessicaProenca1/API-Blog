const express = require('express');
const postController = require('../controllers/postController');
const { tokenValidation } = require('../middlewares/tokenMiddleware');

const routers = express.Router();

routers.post('/', tokenValidation, postController.newPost);

routers.get('/', tokenValidation, postController.findAllPosts);

routers.get('/:id', tokenValidation, postController.findPostById);

routers.put('/:id', tokenValidation, postController.editPostById);

routers.delete('/:id', tokenValidation, postController.deletePostById);

module.exports = routers;