const RoomService = require('../services/roomService');

exports.createRoom = (req, res) => {
    const roomId = RoomService.createRoom();
    res.json({ roomId });
};

exports.getRooms = (req, res) => {
    const rooms = RoomService.getRooms();
    res.json(rooms);
};

exports.getRoomsByUserId = (req, res) => {
    const rooms = RoomService.getRoomsByUserId(req.UserId);
    res.json(rooms);
};

exports.getRoomsByTeamId = (req, res) => {
    const rooms = RoomService.getRoomsByTeamId(req.TeamId);
    res.json(rooms);
};

exports.joinRoom = (req, res) => {
    RoomService.joinRoom(req.RoomId, req.UserId);
    res.json('OK');
};

exports.resetRoom = (req, res) => {
    RoomService.resetRoom(req.RoomId);
    res.json('OK');
};

exports.vote = (req, res) => {
    RoomService.vote(req.RoomId, req.UserId, req.VoteId);
    res.json('OK');
};

exports.setVoteOptions = (req, res) => {
    RoomService.setVoteOptions = (req.RoomId, req.VoteOptions);
    res.json('OK');
};