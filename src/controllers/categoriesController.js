const categoriesService = require('../services/categoriesService');
// const { createToken } = require('../utils/jwtAuth');

const newCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    const category = await categoriesService.newCategory({ name });
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    return res.status(201).json(category);   
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const findCategories = async (_req, res) => {
  try {
    const allCategories = await categoriesService.findCategories();
    if (!allCategories) throw Error;
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno Controller', error: error.message });
  }
};

// const findUserById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const oneUser = await categoriesService.findUserById(id);
//     if (!oneUser) throw Error;
//     return res.status(200).json(oneUser);
//   } catch (error) {
//     return res.status(404).json({ message: 'User does not exist' });
//   }
// };

module.exports = {
  newCategory,
  findCategories,
  // findUserById,
};