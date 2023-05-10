/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories',
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories',
    },
  );

  PostsCategories.associate = ({Categories, BlogPosts}) => {
    Categories.belongsToMany(BlogPosts, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    BlogPosts.belongsToMany(Categories, {
      as: 'Categories',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};