const express = require('express');
const multer = require('multer');
const GalleryController = require('../controllers/galleryController');
const PhotoController = require('../controllers/photoController');

const upload = multer({
    limits: {
        fileSize: 5000000 // max file size 5MB = 5000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
            cb(new Error('only upload files with jpg or jpeg format.'));
        }
        cb(undefined, true); // continue with upload
    }
});

const galleryRouter = express.Router();

galleryRouter.route('/')
    .get(GalleryController.findGalleries)
    .post(GalleryController.createGallery)
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /galleries');
    })
    .delete(GalleryController.deleteGalleries);

galleryRouter.route('/:galleryId')
    .get(GalleryController.findGalleryById)
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}`);
    })
    .put(GalleryController.findGalleryByIdAndUpdate)
    .delete(GalleryController.findGalleryByIdAndDelete);

galleryRouter.route('/:galleryId/photos')
    .get(PhotoController.findPhotosByGalleryId)
    .post(upload.single('data'), PhotoController.uploadPhoto)
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /galleries/${req.params.galleryId}/photos`);
    })
    .delete(PhotoController.findPhotosByGalleryIdAndDelete);

// routes below are exact same as /photos/:photoId
galleryRouter.route('/:galleryId/photos/:photoId')
    .get(PhotoController.findPhotoById)
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}`);
    })
    .put(PhotoController.findPhotoByIdAndUpdate)
    .delete(PhotoController.findPhotoByIdAndDelete);

// routes below are exact same as /photos/:photoId/meta
galleryRouter.route('/:galleryId/photos/:photoId/meta')
    .get((req, res, next) => PhotoController.findPhotoById(req, res, next, meta = true))
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    });

module.exports = galleryRouter;
