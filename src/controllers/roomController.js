const RoomService = require('../services/roomService');

exports.createRoom = (req, res) => {
    const roomId = RoomService.createRoom();
    res.json({ roomId });
};