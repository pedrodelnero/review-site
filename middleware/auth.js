import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const validateToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) throw new Error('Not authenticated');

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decodedToken._id,
    });

    if (!user) throw new Error('No user found with this token');

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    // if (!token) throw new Error('Not authenticated');
    res.status(500).json({ message: error.message });
  }
};

export const createToken = (id) => {
  const token = jwt.sign({ _id: id.toString() }, process.env.JWT_SECRET);
  return token;
};
