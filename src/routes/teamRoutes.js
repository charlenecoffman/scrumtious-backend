const express = require("express");
const router = express.Router();
const TeamController = require('../controllers/teamController');

// Route to create a new team
router.post('/create', TeamController.createTeam);

// Route to create a new team
router.get('/', TeamController.getTeam);

// Route to get all teams for a given user
router.get('/list-by-user', TeamController.getTeamsByUserId);

// Route to join an existing team
router.post('/join', TeamController.joinTeam);

//Route to remove a user from a team
router.post('/leave', TeamController.leaveTeam);

module.exports = router;