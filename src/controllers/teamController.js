const TeamService = require('../services/teamService');

exports.createTeam = (req, res) => {
    const teamId = TeamService.createTeam(req.UserId);
    res.json({ teamId });
};

exports.getTeam = (req, res) => {
    const team = TeamService.getTeam(req.TeamId);
    res.json(team);
};

exports.getTeamsByUserId = (req, res) => {
    const teams = TeamService.getTeamsByUserId(req.TeamId);
    res.json(teams);
};

exports.joinTeam = (req, res) => {
    TeamService.joinTeam(req.TeamId, req.UserId);
    res.json("OK");
};

exports.leaveTeam = (req, res) => {
    TeamService.leaveTeam(req.TeamId, req.UserId);
    res.json("OK");
};



