// Init express
const express = require('express');

// init app
const app = express();

// import routes
const router = require('./routes/index');

// middlewares and config
// Handle form submissions with URL encoded data
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// routes
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
