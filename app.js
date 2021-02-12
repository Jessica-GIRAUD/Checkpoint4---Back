const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", function(req, res) {
  //when we get an http get request to the root/homepage
  res.send("Hello World");
});

app.use(express.json()); // For JSON format

function logInfos(req, res, next) {
  console.log(`${req.method} request from ${req.hostname}`);
  next();
}

app.use(logInfos);

// pre-route middlewares
app.use(cors({
  origin : ["http://localhost:3000", "https://ce-soir-japporte-le-dessert.herokuapp.com/"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes")(app);

// server setup
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
