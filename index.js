const express = require('express');
const app = express();
const port = 5000;

const connection = require("./config");

const dessert = require('./routes/dessert')
const receipe = require('./routes/receipe')

app.use(express.json());

connection.connect(function(err) {
  if(err) {
    console.err("error connecting" + errstack)
    return;
  }
  console.log("Connected as id " + connection.threadId )
})

app.get("/", (req, res) => {
  res.send("Welcome on Ce soir, j'apporte le dessert !");
});

app.use('/dessert', dessert);
app.use('/receipe', receipe);

//Listenning
 app.listen(port, () => {
  console.log(`Server is runing on port ${port} ✅`);
})
 