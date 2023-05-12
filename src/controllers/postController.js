const postService = require('../services/postService');
const categoriesService = require('../services/categoriesService');

const newPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { data: { userId } } = req.user;
      
    if (!title || !content || !categoryIds) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const promises = categoryIds.map((element) => categoriesService.findCategoryById(element));
    const resolvedPromises = await Promise.all(promises);
    const categoryNotFound = resolvedPromises.some((element) => element === null);

    if (categoryNotFound) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const post = await postService.newPost({ ...req.body, userId });

    return res.status(201).json(post);  
};

const findAllPosts = async (_req, res) => {
  try {
    const allPosts = await postService.findAllPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno Controller', error: error.message });
  }
};

const findPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const onePost = await postService.findPostById(id);
    if (!onePost) throw Error;
    return res.status(200).json(onePost);
  } catch (error) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
};

module.exports = {
  newPost,
  findAllPosts,
  findPostById,
};