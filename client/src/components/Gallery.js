// eslint-disable-next-line

import React, { useEffect, useRef, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { startLoadPhotos } from '../actions/photos';
import { startListGalleries } from '../actions/galleries';
import Photo from './Photo';

const Gallery = ({ match, errors, photos, galleries, dispatch }) => {
  const [arePhotosLoading, setPhotosLoading] = useState(false);
  const [areGalleriesLoading, setGalleriesLoading] = useState(false);
  const [chosenGallery, setChosenGallery] = useState({});

  useEffect(() => {
    setPhotosLoading(true);
    dispatch(startLoadPhotos(match.params.galleryId));
  }, []);

  useEffect(() => {
    setGalleriesLoading(true);
    dispatch(startListGalleries());
  }, []);

  useEffect(() => {
    if (photos.length > 0) {
      setPhotosLoading(false);
    }
  }, [photos]);

  useEffect(() => {
    if (galleries.length > 0) {
      setChosenGallery(galleries.filter((g) => g._id === match.params.galleryId)[0]);
      setGalleriesLoading(false);
    }
  }, [galleries]);

  return (
    <React.Fragment>
      <Jumbotron>
        <h1>
          {areGalleriesLoading ? 'Loading...' : `${chosenGallery.name} - ${chosenGallery.title}`}</h1>
        <p>
          {areGalleriesLoading ? 'Loading...' : chosenGallery.description}
        </p>
      </Jumbotron>
      <div className="photos-list">
        {errors && errors.get_error && (
          <p className="errorMsg centered-message">{errors.get_error}</p>
        )}
        {arePhotosLoading ? (
          <div className="loading-msg centered-message">Loading...</div>
        ) : (
            photos.map((photo) => <Photo name={photo.name} caption={photo.caption} key={photo._id} id={photo._id} />)
          )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  galleries: state.galleries || [],
  photos: state.photos || [],
  gallery: state.gallery || {},
  errors: state.errors || {}
});

export default connect(mapStateToProps)(Gallery);
