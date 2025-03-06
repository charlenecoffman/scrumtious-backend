class Room {
    constructor(id) {
        this.id = id;
        this.users = {};
        this.votes = {};
    }
}

module.exports = Room;