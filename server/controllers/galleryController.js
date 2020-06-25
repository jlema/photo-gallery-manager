const Gallery = require('../models/gallery');

exports.findGalleries = (req, res, next) => {
    Gallery.find(req.query)
        .then(galleries => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(galleries);
        })
        .catch(err => next(err));
};

exports.createGallery = (req, res, next) => {
    Gallery.create(req.body)
        .then(gallery => {
            console.log('Gallery Created ', gallery);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(gallery);
        })
        .catch(err => next(err));
};

exports.deleteGalleries = (req, res, next) => {
    Gallery.deleteMany(req.query)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
};

exports.findGalleryById = (req, res, next) => {
    Gallery.findById(req.params.galleryId)
        .then(gallery => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(gallery);
        })
        .catch(err => next(err));
};

exports.findGalleryByIdAndUpdate = (req, res, next) => {
    Gallery.findByIdAndUpdate(req.params.galleryId, {
        $set: req.body
    }, { new: true })
        .then(gallery => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(gallery);
        })
        .catch(err => next(err));
};

exports.findGalleryByIdAndDelete = (req, res, next) => {
    Gallery.findByIdAndDelete(req.params.galleryId)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
};
