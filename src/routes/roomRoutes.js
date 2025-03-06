const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/roomController');

// Route to create a new room
router.post('/create', RoomController.createRoom);

// Route to get all rooms (optional)
router.get('/list', RoomController.getRooms);

module.exports = router;
