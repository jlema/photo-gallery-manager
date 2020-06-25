import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { getErrors } from './errors';

export const beginAddPhoto = (name, caption, data, gallery) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('caption', caption);
      formData.append('data', data);
      formData.append('gallery', gallery);
      await axios.post(`${baseUrl}/galleries/${gallery}/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const startLoadPhotos = (galleryId) => {
  return async (dispatch) => {
    try {
      const photos = await axios.get(`${baseUrl}/galleries/${galleryId}/photos`);
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const loadPhotos = (photos) => ({
  type: 'LOAD_PHOTOS',
  photos
});
