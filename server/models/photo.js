const mongoose = require('mongoose');

// A Photo has the following attributes
// 1. A name (which can be used as part of the URL for routing instead of the _id)
// 2. A caption (which shows at the bottom of the photo)
// 3. The actual data for the photo (this should be replaced for a cloudinary ID)
// 4. A reference to the gallery to which it belongs

const PhotoSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: true // this is needed to use photo names as routes
  },
  caption: {
    type: String,
    required: false
  },
  data: {
    type: Buffer
  },
  gallery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery'
  }
}, {
  timestamps: true
});

// avoids sending back data buffer as JSON
PhotoSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.data;
  return result;
};

module.exports = mongoose.model('Photo', PhotoSchema);
