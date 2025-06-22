import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';

const router = express.Router();

// Route: POST /api/users/register
router.post('/register', registerUser);
router.post('/login', loginUser); 
export default router;
