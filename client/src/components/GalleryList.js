// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
		<div className='galleries-list'>
			{errors && errors.get_error && (
				<p className='errorMsg centered-message'>{errors.get_error}</p>
			)}
			{isLoading ? (
				<div className='loading-msg centered-message'>Loading...</div>
			) : (
				galleries.map(gallery => (
					<li key={gallery._id}>
						{gallery.name}:{' '}
						<Link to={`/gallery/${gallery._id}`}>{gallery.title}</Link>
					</li>
				))
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	galleries: state.galleries.galleries || [],
	errors: state.errors.errors || {}
});

export default connect(mapStateToProps)(GalleryList);
