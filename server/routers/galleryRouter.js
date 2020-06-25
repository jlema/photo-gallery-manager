const express = require('express');
const multer = require('multer');
const GalleryController = require('../controllers/galleryController');
const PhotoController = require('../controllers/photoController');
const cors = require('./cors');

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
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, GalleryController.findGalleries)
    .post(cors.corsWithOptions, GalleryController.createGallery)
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /galleries');
    })
    .delete(cors.corsWithOptions, GalleryController.deleteGalleries);

galleryRouter.route('/:galleryId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, GalleryController.findGalleryById)
    .post(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}`);
    })
    .put(cors.corsWithOptions, GalleryController.findGalleryByIdAndUpdate)
    .delete(cors.corsWithOptions, GalleryController.findGalleryByIdAndDelete);

galleryRouter.route('/:galleryId/photos')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, PhotoController.findPhotosByGalleryId)
    .post(cors.corsWithOptions, upload.single('data'), PhotoController.uploadPhoto)
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /galleries/${req.params.galleryId}/photos`);
    })
    .delete(cors.corsWithOptions, PhotoController.findPhotosByGalleryIdAndDelete);

// routes below are exact same as /photos/:photoId
galleryRouter.route('/:galleryId/photos/:photoId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, PhotoController.findPhotoById)
    .post(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}`);
    })
    .put(cors.corsWithOptions, PhotoController.findPhotoByIdAndUpdate)
    .delete(cors.corsWithOptions, PhotoController.findPhotoByIdAndDelete);

// routes below are exact same as /photos/:photoId/meta
galleryRouter.route('/:galleryId/photos/:photoId/meta')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => PhotoController.findPhotoById(req, res, next, meta = true))
    .post(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    })
    .delete(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /galleries/${req.params.galleryId}/photos/${req.params.photoId}/meta`);
    });

module.exports = galleryRouter;
