import express from 'express';
import { test, updateUser, deleteUser, getUserListing } from '../controller/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listing/:id', verifyToken, getUserListing);  



export default router;