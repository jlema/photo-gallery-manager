const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), 'server', '.env') });
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`Connected correctly to MongoDB database at ${url}`),
  err => console.log(err)
);
