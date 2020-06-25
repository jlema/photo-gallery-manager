import axios from 'axios';
import { REACT_APP_URL } from '../utils/constants';
import { getErrors } from './errors';

export const startListGalleries = () => {
    return async (dispatch) => {
        try {
            const galleries = await axios.get(`${REACT_APP_URL}/galleries/`);
            dispatch(listGalleries(galleries.data));
        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    };
};

export const listGalleries = (galleries) => ({
    type: 'LIST_GALLERIES',
    galleries
});
