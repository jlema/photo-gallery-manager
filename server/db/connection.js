const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/photo_gallery';
mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`Connected correctly to MongoDB database at ${url}`),
  err => console.log(err)
);
