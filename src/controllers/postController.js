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

// const findCategories = async (_req, res) => {
//   try {
//     const allCategories = await categoriesService.findCategories();
//     if (!allCategories) throw Error;
//     return res.status(200).json(allCategories);
//   } catch (error) {
//     return res.status(500).json({ message: 'Erro interno Controller', error: error.message });
//   }
// };

module.exports = {
  newPost,
  // findCategories,
};