class Team {
    constructor(id) {
        this.id = id;
        this.users = {};
        this.rooms = {};
    }
}

module.exports = Team;