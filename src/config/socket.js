const { Server } = require('socket.io');

module.exports = (server) => {
    const io = new Server(server, { cors: { origin: "*" } });

    const rooms = {}; // Store users and votes per room

    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Handle joining a room
        socket.on('joinRoom', (roomId, username) => {
            socket.join(roomId);

            if (!rooms[roomId]) {
                rooms[roomId] = {};
            }
            rooms[roomId][socket.id] = { username, vote: null };

            console.log(`${username} joined room: ${roomId}`);

            // Notify others in the room
            io.to(roomId).emit('roomUpdated', rooms[roomId]);
        });

        // Handle voting
        socket.on('submitVote', (roomId, vote) => {
            if (rooms[roomId] && rooms[roomId][socket.id]) {
                rooms[roomId][socket.id].vote = vote;
                io.to(roomId).emit('voteUpdated', rooms[roomId]);
            }
        });

        // Handle flipping cards (revealing all votes)
        socket.on('flipCards', (roomId) => {
            io.to(roomId).emit('revealVotes', rooms[roomId]);
        });

        // Handle user disconnecting
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
            for (const roomId in rooms) {
                if (rooms[roomId][socket.id]) {
                    delete rooms[roomId][socket.id];
                    io.to(roomId).emit('roomUpdated', rooms[roomId]);
                }
            }
        });
    });

    return io;
};
