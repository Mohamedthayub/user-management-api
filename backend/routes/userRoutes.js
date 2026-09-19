const express = require('express');
const router = express.Router();
const {createUser,getUsers,getUserById,updateUser,deleteUser} = require('../controller/userController');

router.route("/users").post(createUser).get(getUsers);

router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;