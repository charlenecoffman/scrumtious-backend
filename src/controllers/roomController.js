const RoomService = require('../services/roomService');

exports.createRoom = (req, res) => {
    const roomId = RoomService.createRoom();
    res.json({ roomId });
};

exports.getRooms = (req, res) => {
    const rooms = RoomService.getRooms();
    res.json(rooms);
};
