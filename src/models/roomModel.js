class Room {
    constructor(id) {
        this.id = id;
        this.users = {};
        this.votes = {};
        this.voteOptions = {};
        this.teamId = undefined;
    }
}

module.exports = Room;