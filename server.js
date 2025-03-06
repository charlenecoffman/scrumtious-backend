require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*', // Change this in production to allow only frontend domain
        methods: ['GET', 'POST']
    }
});

const rooms = {}; // Store active rooms and votes

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('joinRoom', (roomId, username) => {
        socket.join(roomId);
        console.log(`${username} joined room: ${roomId}`);

        if (!rooms[roomId]) rooms[roomId] = {};
        rooms[roomId][socket.id] = { username, vote: null };

        io.to(roomId).emit('roomUpdated', rooms[roomId]);
    });

    socket.on('submitVote', (roomId, vote) => {
        if (rooms[roomId] && rooms[roomId][socket.id]) {
            rooms[roomId][socket.id].vote = vote;
            io.to(roomId).emit('roomUpdated', rooms[roomId]);
        }
    });

    socket.on('flipCards', (roomId) => {
        io.to(roomId).emit('revealVotes', rooms[roomId]);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        for (const roomId in rooms) {
            if (rooms[roomId][socket.id]) {
                delete rooms[roomId][socket.id];
                io.to(roomId).emit('roomUpdated', rooms[roomId]);
            }
        }
    });
});

app.get('/', (req, res) => {
    res.send('Scrumtious WebSocket Server is running!');
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
