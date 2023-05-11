const { Category } = require('../models'); 

const newCategory = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const findCategories = () => Category.findAll();

module.exports = {
  newCategory,
  findCategories,
};