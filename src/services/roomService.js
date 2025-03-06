const Room = require('../models/roomModel');

const rooms = {};  // In-memory storage (replace with Redis later)

exports.createRoom = () => {
    const roomId = Math.random().toString(36).substr(2, 9);
    rooms[roomId] = new Room(roomId);
    return roomId;
};