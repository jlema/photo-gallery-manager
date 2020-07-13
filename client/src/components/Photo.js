import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { startLoadPhotoMeta } from '../actions/photos';

const Photo = ({
	match,
	name,
	caption,
	id,
	loadMeta = true,
	errors,
	meta,
	dispatch
}) => {
	id = id ? id : match.params.photoId;
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (loadMeta) {
			setIsLoading(true);
			dispatch(startLoadPhotoMeta(id));
		}
	}, []);

	useEffect(() => {
		if (meta) {
			setIsLoading(false);
		}
	}, [meta]);

	return (
		<Card className='photo'>
			<Card.Img variant='top' src={`/photos/${id}`} alt='Photo' />
			<Card.Body>
				<Card.Title>
					{isLoading ? 'Loading' : meta.name ? meta.name : name}
				</Card.Title>
				<Card.Subtitle>
					{isLoading ? 'Loading' : meta.caption ? meta.caption : caption}
				</Card.Subtitle>
				{!loadMeta && (
					<Link to={`/photo/${id}`}>
						<Card.Link>Full Size Photo</Card.Link>
					</Link>
				)}
			</Card.Body>
		</Card>
	);
};

const mapStateToProps = state => ({
	errors: state.errors.errors || {},
	meta: state.photos.meta || {}
});

export default connect(mapStateToProps)(Photo);
