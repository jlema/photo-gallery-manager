const mongoose = require('mongoose');

// A Gallery has the following attributes
// 1. A name (which can be used as part of the URL for routing instead of the _id)
// 2. A title (which shows at the top of the gallery page)
// 3. A description (a paragraph which shows below the title on the gallery page)
// (implemented in Photos schema) 4. A set of photos (which show below the description - or hero photo)
// (5. A 'hero' photo - a photo highlighted at the top) - TBD later - nice to have feature
// Note: a photo can belong to only one gallery - one gallery to many photos
// The relationship is built from Photo to Gallery

const GallerySchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: true // this is needed to use gallery names as routes
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Gallery', GallerySchema);
