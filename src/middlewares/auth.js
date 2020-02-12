import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ messageError: "Token not provided."});
  }

  const [, token] = authHeader.split(' '); // com esta virgula nos descartamos a primeira opcao e pegamos apenas o token
  
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    
    return next();
  } catch (error) {
    return res.status(401).json({ messageError: "Token invalid."});
  }
  
  return next();
};