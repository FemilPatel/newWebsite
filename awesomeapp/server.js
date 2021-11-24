require ('dotenv').config ();

const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost:27017/awesomeapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on ('error', error => console.error (error));
db.once ('open', () => console.log ('connected to database'));
app.use (express.json ());

const subscribersRouter = require ('./routes/subscribers');
app.use ('/subscribers', subscribersRouter);
app.listen (8080, () => console.log ('server started'));
