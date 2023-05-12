/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: { name: 'userId', field: 'user_id' }, as: 'user' });
  };

  return BlogPost;
};