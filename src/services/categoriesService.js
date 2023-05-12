const { Category } = require('../models'); 

const newCategory = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const findCategories = () => Category.findAll();

const findCategoryById = async (id) => {
  const user = await Category.findOne({
    where: { id },
    attributes: { exclude: ['name'] },
  });
  return user;
};
module.exports = {
  newCategory,
  findCategories,
  findCategoryById,
};