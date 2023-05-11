const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await loginService.login({ email, password }); // passo pro service porque preciso verificar se o email/senha estão corretos. A func login no service deve retornar true/false caso o email ou senha não estejam no db
    if (user === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig); // duvida nessa linha. É userId: user.id???? Quem é data nesse treco???
 
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  login,
};