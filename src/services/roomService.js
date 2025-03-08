exports.createRoom = (req, res) => {
    const roomId = crypto.randomUUID()
    res.json({ roomId });
};

exports.getRooms = (req, res) => {
    res.json({ message: "Fetching all rooms (not yet implemented)" });
};

exports.getRoomsByUserId = (req, res) => {
    res.json({ message: `Fetching all rooms for user ${req.UserId} (not yet implemented)` });
};

exports.getRoomsByTeamId = (req, res) => {
    res.json({ message: `Fetching all rooms for team ${req.UserId} (not yet implemented)` });
};

exports.joinRoom = (req, res) => {
    res.json({ message: `User ${req.UserId} to join room ${req.RoomId} (not yet implemented)` });
};

exports.resetRoom = (req, res) => {
    res.json({ message: `Room ${req.RoomId} being reset (not yet implemented)` });
};

exports.vote = (req, res) => {
    res.json({ message: `User ${req.UserId} voting for ${req.Vote} (not yet implemented)` });
};

exports.setVoteOptions = (req, res) => {
    res.json({ message: `Room ${req.RoomId} vote options being set to ${req.VoteOptions} (not yet implemented)` });
};
