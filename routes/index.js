const dessert = require('./dessert');
const receipe = require('./receipe');
const ingredient = require('./ingredient');
const search = require('./search');
 

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/dessert', dessert);
  app.use('/receipe', receipe);
  app.use('/ingredient', ingredient);
  app.use('/search', search);
};
