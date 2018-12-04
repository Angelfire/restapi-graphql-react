const express = require('express');
const UserController = require('../controllers');

const router = express.Router();

router.get('/', UserController.wrongRoute);
router.get('/api/v1/users', UserController.getAllUsers);
router.get('/api/v1/users/:id', UserController.getUser);

module.exports = router;
