const { User } = require('../models');

const login = async ({ email, password }) => {
  const createdUser = await User.findOne({ 
    where: { email, password },
  });
  console.log(createdUser);
  return createdUser;
};

module.exports = {
  login,
};