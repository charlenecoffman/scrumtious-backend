const http = require('http');
const app = require('./app');
const { PORT } = require('./config/env');
const setupSocket = require('./config/socket');

const server = http.createServer(app);
const io = setupSocket(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});