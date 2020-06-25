import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { beginAddPhoto } from '../actions/photos';
import { useInput } from '../utils/useInputHook';

const UploadForm = ({ errors, dispatch }) => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: caption, bind: bindCaption, reset: resetCaption } = useInput('');
  const { value: gallery, bind: bindGallery, reset: resetGallery } = useInput('5ef2bd3f63895e0b48e30cb2');
  // const [gallery, setGallery] = useState(null);
  const [data, setData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErroMsg] = useState(null);

  useEffect(() => {
    setErroMsg(errors);
  }, [errors]);

  useEffect(() => {
    setErroMsg(''); // reset error message on page load
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (data) {
      setErroMsg('');
      dispatch(beginAddPhoto(name, caption, data, gallery));
      setIsSubmitted(true);
      resetName();
      resetCaption();
      resetGallery();
    }
  };

  return (
    <React.Fragment>
      {errorMsg && errorMsg.upload_error ? (
        <p className="errorMsg centered-message">{errorMsg.upload_error}</p>
      ) : (
          isSubmitted && (
            <p className="successMsg centered-message">
              Photo uploaded successfully.
            </p>
          )
        )}
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Select gallery to which to add photo</Form.Label>
          <Form.Control as="select" {...bindGallery}>
            <option value="5ef2bd3f63895e0b48e30cb2">default - This is the default gallery</option>
          </Form.Control>
          <Form.Label>Enter photo name</Form.Label>
          <Form.Control type="text" name="name" {...bindName} />
          <Form.Label>Enter photo caption</Form.Label>
          <Form.Control type="text" name="caption" {...bindCaption} />
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={e => setData(e.target.files[0])} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className={`${!data ? 'disabled submit-btn' : 'submit-btn'}`}
          disabled={data ? false : true}
        >
          Upload
        </Button>
      </Form>
    </React.Fragment >
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(UploadForm);
