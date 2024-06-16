const mongoose = require('mongoose');
require('dotenv').config('../.env');

const app = require('./app');

const DB = process.env.MONGO_URI;

try {
  mongoose.connect(DB);
  console.log('DB connection successful');
} catch (error) {
  console.log(error);
}

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
