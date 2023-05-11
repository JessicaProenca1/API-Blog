const { BlogPost } = require('../models'); 

const newPost = async ({ title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, categoryIds });
  return post;
};

// const findCategories = () => Category.findAll();

module.exports = {
  newPost,
  // findCategories,
};