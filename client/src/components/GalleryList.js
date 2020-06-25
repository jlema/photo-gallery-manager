// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startListGalleries } from '../actions/galleries';

const GalleryList = ({ errors, galleries, dispatch }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        dispatch(startListGalleries());
    }, []);

    useEffect(() => {
        if (galleries.length > 0) {
            setIsLoading(false);
        }
    }, [galleries]);

    return (
        <div className="galleries-list">
            {errors && errors.get_error && (
                <p className="errorMsg centered-message">{errors.get_error}</p>
            )}
            {isLoading ? (
                <div className="loading-msg centered-message">Loading...</div>
            ) : (
                    galleries.map((gallery) =>
                        <li key={gallery._id}>{gallery.name}: <a href={`/gallery/${gallery._id}/`}>{gallery.title}</a></li>
                    )
                )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    galleries: state.galleries || [],
    errors: state.errors || {}
});

export default connect(mapStateToProps)(GalleryList);
