const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

//Route to get all users
router.get('/users',userController.getAllUsers);
//Route to search a user by id
router.get('/users/:id',userController.getUserById);
//Route to create a new user
router.post('/users',userController.createUser);
//Route to edit a user
router.put('/users',userController.updateUser);
//Route to delete a user
router.delete('/users',userController.deleteUser);

module.exports=router;