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

const findUsers = async (_req, res) => {
  try {
    const allUsers = await userService.findUsers();
    if (!allUsers) throw Error;
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno Controller', error: error.message });
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await userService.findUserById(id);
    if (!oneUser) throw Error;
    return res.status(200).json(oneUser);
  } catch (error) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

const deleteUser = async (req, res) => {
  const { data: { userId } } = req.user;
  const user = await userService.deleteUser(userId);
  if (user) {
    return res.status(204).json();
  }
};

module.exports = {
  createdUSer,
  findUsers,
  findUserById,
  deleteUser,
};