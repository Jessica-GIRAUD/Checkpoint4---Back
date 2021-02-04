const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
response.send('Welcome sur mon site');
})

module.exports = router;