const {getUser,addUser,updateUser,deleteUser}=require('../controller/usercontroller');
const express = require('express');
const router = express.Router();

router.get('/find',getUser);
router.post('/add',addUser);
router.put('/update/(:id)',updateUser);
router.delete('/del/(:id)',deleteUser);

module.exports = router;