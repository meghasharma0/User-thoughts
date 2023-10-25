const express = require('express');
const app = express();
const user_routes = require('./Routes/userRoute');
require('dotenv').config();
require('./DB/connect');

const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json());
app.use('/api', user_routes);

app.get('/', (req, res) => {
  res.send("Hello world");
});


app.listen(port, () => {
  console.log(`listening to port no ${port}`);
});