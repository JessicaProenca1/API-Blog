const { BlogPost, PostCategory, sequelize } = require('../models'); 

const newPost = async ({ title, content, categoryIds, userId }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId }, { transaction: t });

      const promises = categoryIds.map((element) => PostCategory
        .create({ postId: post.id, categoryId: element }, { transaction: t }));
      await Promise.all(promises);
      return post;
    });
    return result;    
  } catch (error) {
    console.log(error); 
  }
};

module.exports = {
  newPost,
};