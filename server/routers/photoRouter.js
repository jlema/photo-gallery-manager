const express = require('express');
const PhotoController = require('../controllers/photoController');
const authenticate = require('../authenticate');
const cors = require('./cors');

const photoRouter = express.Router();

photoRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, PhotoController.findPhotos)
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /photos');
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /photos');
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, PhotoController.deletePhotos);

photoRouter.route('/:photoId')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, PhotoController.findPhotoById)
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /photos/${req.params.photoId}`);
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, PhotoController.findPhotoByIdAndUpdate)
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, PhotoController.findPhotoByIdAndDelete);

photoRouter.route('/:photoId/meta')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => PhotoController.findPhotoById(req, res, next, meta = true))
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /photos/${req.params.photoId}/meta`);
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /photos/${req.params.photoId}/meta`);
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /photos/${req.params.photoId}/meta`);
  });

module.exports = photoRouter;
