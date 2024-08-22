const express = require('express');

const app = express();

Port = 7865;

//middlewares to read the body
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login/', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(Port, () => {
  console.log(`API available on localhost port ${Port}`);
});