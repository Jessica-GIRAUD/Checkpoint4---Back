const express = require("express");
const cors = require('cors');
const SERVER_PORT = 3000;

const app = express();

app.use(express.json()); // For JSON format

function logInfos(req, res, next) {
  console.log(`${req.method} request from ${req.hostname}`);
  next();
}

app.use(logInfos);

// pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes")(app);

// server setup
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

module.exports = server;
