const { User } = require('../models'); 

const createdUSer = async ({ displayName, email, password, image }) => {
  const [user, created] = await User.findOrCreate({ 
    where: { email, password },
    defaults: {      
      displayName,
      email, 
      password,
      image,
    },
  });
  if (created) return user;
  return created;
};

const findUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = {
  createdUSer,
  findUsers,
};