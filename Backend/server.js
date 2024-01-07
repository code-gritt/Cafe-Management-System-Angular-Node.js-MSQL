const http = require("http");
const app = require("./server");
require("dotenv").config();

const server = http.createServer(app);
server.listen(process.env.PORT);
