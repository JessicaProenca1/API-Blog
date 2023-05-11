const { Category } = require('../models'); 

const newCategory = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const findCategories = () => Category.findAll();

// const findUserById = async (id) => {
//   const user = await User.findOne({
//     where: { id },
//     attributes: { exclude: ['password'] },
//   });
//   return user;
// };

module.exports = {
  newCategory,
  findCategories,
  // findUserById,
};