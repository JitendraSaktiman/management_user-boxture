const express = require('express');
const router = express.Router();
const UserComtroller = require('../controllers/userController');

router.post('/users/Createuser', UserComtroller.Createuser)
router.get('/users/getAllUsers', UserComtroller.getAllUsers)
router.get('/users/getUserById/:userId', UserComtroller.getUserById)
router.put('/users/updateUser/:userId', UserComtroller.updateUser)
router.delete('/users/deleteUsers/:userId', UserComtroller.deleteUsers)


module.exports = router;


// // "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "start": "nodemon src/index.js"
  // },