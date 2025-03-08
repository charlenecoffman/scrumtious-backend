const express = require("express");
const router = express.Router();
const RoomController = require('../controllers/roomController');

// Route to create a new room
router.post('/create', RoomController.createRoom);

// Route to get all rooms
router.get('/list', RoomController.getRooms);

// Route to join an existing room
router.post('/join', RoomController.joinRoom);

//Route to get list of a user's rooms
router.get('/list-by-user', RoomController.getRoomsByUserId);

//Route to get list of a team's rooms
router.get('/list-by-team', RoomController.getRoomsByTeamId);

//Route to reset votes in a room
router.post('/reset', RoomController.resetRoom);

//Route to vote in a room
router.post('/vote', RoomController.vote);

//Route to set vote options for a room
router.post('/set-vote-options', RoomController.setVoteOptions);

module.exports = router;
