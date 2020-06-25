import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { getErrors } from './errors';

export const startListGalleries = () => {
    return async (dispatch) => {
        try {
            const galleries = await axios.get(`${baseUrl}/galleries/`);
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
