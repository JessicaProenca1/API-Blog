const { BlogPost, User, Category, PostCategory, sequelize } = require('../models'); 

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

const findAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return result;
};

const findPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    });
  return post;
};

module.exports = {
  newPost,
  findAllPosts,
  findPostById,
};