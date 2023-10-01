const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');

const Tour = require('../../models/tours');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!')); // eslint-disable-line

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully imported!'); // eslint-disable-line
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
  process.exit();
};

// DELETE ALL DATA FROM THE DB

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!'); // eslint-disable-line
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
