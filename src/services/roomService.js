const RoomService = require('../services/roomService');

exports.createRoom = (req, res) => {
    const roomId = RoomService.createRoom();
    res.json({ roomId });
};

// ✅ Add this function to fix the error
exports.getRooms = (req, res) => {
    res.json({ message: "Fetching all rooms (not yet implemented)" });
};
