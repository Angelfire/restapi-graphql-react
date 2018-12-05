const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./api/routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(router);

try {
  app.listen(PORT, () => console.log(`Express server running at ${ PORT }`));
} catch (error) {
  console.log(`Something went wrong ${ error }`);
}
