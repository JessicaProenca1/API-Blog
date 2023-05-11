const userService = require('../services/userService');
const { createToken } = require('../utils/jwtAuth');

const createdUSer = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const user = await userService.createdUSer({ displayName, email, password, image });
    if (!user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const token = createToken({ userId: user.id });

    return res.status(201).json({ token });   
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const findUsers = async (req, res) => {
  try {
    const allUsers = await userService.findUsers();
    if (!allUsers) throw Error;
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno Controller', error: error.message });
  }
};

module.exports = {
  createdUSer,
  findUsers,
};