const dessert = require('./dessert');
const receipe = require('./receipe');


// eslint-disable-next-line
module.exports = (app) => {
  app.use('/dessert', dessert);
  app.use('/receipe', receipe);
};
