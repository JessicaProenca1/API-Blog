/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
    },
  );

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: { name: 'userId', field: 'user_id' }, as: 'users' });
  };

  return BlogPosts;
};