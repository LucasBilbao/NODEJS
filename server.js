const dotenv = require('dotenv');

const mongoose = require('mongoose');

// Configure .env
dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!')); // eslint-disable-line

const PORT = process.env.PORT ?? 3000;
app.listen(
  PORT,
  () => console.log(`App running on port http://localhost:${PORT} ...`), // eslint-disable-line
);
