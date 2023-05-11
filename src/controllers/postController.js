const postService = require('../services/postService');

const newPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    
    const post = await postService.newPost({ title, content, categoryIds });
    if (!title || !content || !categoryIds) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    return res.status(201).json(post);   
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
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