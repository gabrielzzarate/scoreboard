const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const MONGO_URI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nextproductionapp.nuub2.mongodb.net/barstool?retryWrites=true&w=majority`;

const options = {
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
}

mongoose.connect(MONGO_URI, options);

require('./models/Game');
app.use(bodyParser.json());

require('./routes/nba')(app);
require('./routes/mlb')(app);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});