const Photo = require('../models/photo');
const { response } = require('express');

exports.findPhotos = (req, res, next) => {
    Photo.find(req.query)
        .then(photos => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(photos);
        })
        .catch(err => {
            res.status(500).send({
                get_error: err.message
            });
        });
};

exports.findPhotoById = (req, res, next, meta = false) => {
    Photo.findById(req.params.photoId)
        .then(photo => {
            res.statusCode = 200;
            if (photo) {
                if (!meta) {
                    res.setHeader('Content-Type', 'image/jpeg');
                    res.send(Buffer.from(photo.data, 'binary'));
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.json(photo);
                }
            } else {
                err = new Error(`Photo ${req.params.photoId} not found.`);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => {
            res.status(500).send({
                get_error: err.message
            });
            console.log(err.message);
        });
};

exports.findPhotoByIdAndUpdate = (req, res, next) => {
    Photo.findByIdAndUpdate(req.params.photoId, {
        $set: req.body
    }, { new: true })
        .then(photo => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(photo);
        })
        .catch(err => next(err));
};

exports.findPhotoByIdAndDelete = (req, res, next) => {
    Photo.findByIdAndDelete(req.params.photoId)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
};

exports.deletePhotos = (req, res, next) => {
    Photo.deleteMany(req.query)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
};

exports.findPhotosByGalleryId = (req, res, next) => {
    Photo.find({ gallery: req.params.galleryId })
        .then(photos => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(photos);
        })
        .catch(err => next(err));
}

exports.findPhotosByGalleryIdAndDelete = (req, res, next) => {
    Photo.deleteMany({ gallery: req.params.galleryId })
        .then(photos => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(photos);
        })
        .catch(err => next(err));
};

exports.uploadPhoto = (req, res, next) => {
    req.body.gallery = req.params.galleryId;
    const photo = new Photo(req.body);
    const file = req.file.buffer;
    photo.data = file;
    photo.save()
        .then(photo => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(photo);
        })
        .catch(err => {
            if (err.message.includes('E11000')) {
                res.status(500).send({
                    upload_error: 'That photo name is already in use. Please choose a different name.'
                });
            } else {
                res.status(500).send({
                    upload_error: err.message
                });
            }
        });
};
