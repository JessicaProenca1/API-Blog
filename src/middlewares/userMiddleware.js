const Joi = require('joi');

const displayNameValidation = (req, res, next) => {
  const { displayName } = req.body;

  const userValidation = Joi.object({
    displayName: Joi.string().min(8),
  });
  const { error } = userValidation
    .validate({ displayName });
  if (error) {    
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  next();
}; 

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const userValidation = Joi.object({
    email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  });
  const { error } = userValidation
    .validate({ email });
  if (error) {    
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
}; 

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  const userValidation = Joi.object({
    password: Joi.string().min(6).required(),
  });
  const { error } = userValidation
    .validate({ password });
  if (error) {    
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
}; 

module.exports = { displayNameValidation, emailValidation, passwordValidation };