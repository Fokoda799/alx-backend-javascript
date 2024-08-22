const express = require('express');
const app = express();
const port = 7865;

// Route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Route for cart with number validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export app for testing purposes
