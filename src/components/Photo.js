import React from 'react';
import { Card } from 'react-bootstrap';

const Photo = ({ match, name, caption, id }) => {
  id = id ? id : match.params.photoId;
  return (
    <Card className="photo">
      <Card.Img
        variant="top"
        src={`/photos/${id}`}
        alt="Photo"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{caption}</Card.Subtitle>
        <Card.Link href={`/photo/${id}`}>Full Size Photo</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Photo;
