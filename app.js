require("dotenv").config();
const Server = require("../08-websocket-server/model/server");

const server = new Server();

server.listen();
