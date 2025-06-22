import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 1. Check if Authorization header exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token' });
    }

    // 2. Extract token
    const token = authHeader.split(' ')[1];

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user to request (excluding password)
    req.user = await User.findById(decoded.id).select('-password');
    
    next(); // proceed to route

  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export default protect;
