const express = require('express');
const PhotoController = require('../controllers/photoController');

const photoRouter = express.Router();

photoRouter.route('/')
  .get(PhotoController.findPhotos)
  .post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /photos');
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /photos');
  })
  .delete(PhotoController.deletePhotos);

photoRouter.route('/:photoId')
  .get(PhotoController.findPhotoById)
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /photos/${req.params.photoId}`);
  })
  .put(PhotoController.findPhotoByIdAndUpdate)
  .delete(PhotoController.findPhotoByIdAndDelete);

photoRouter.route('/:photoId/meta')
  .get((req, res, next) => PhotoController.findPhotoById(req, res, next, meta = true))
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /photos/${req.params.photoId}/meta`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /photos/${req.params.photoId}/meta`);
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /photos/${req.params.photoId}/meta`);
  });

module.exports = photoRouter;
