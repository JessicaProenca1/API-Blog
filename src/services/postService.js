const { BlogPost, User } = require('../models'); 

const newPost = async ({ title, content, categoryIds, userId }) => {
  try {
      const post = await BlogPost.create(
        { title, content, categoryIds, userId },
        {
          include: [
            { model: User, as: 'users' },
          ],
        },
        );
      return post;  
  } catch (error) {
    console.log(error); 
  }
};

// const findCategories = () => Category.findAll();

module.exports = {
  newPost,
  // findCategories,
};