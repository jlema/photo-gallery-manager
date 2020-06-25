import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { loginUser, logoutUser } from '../actions/auth';
import { Modal, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = ({ isAuthenticated, dispatch }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  function handleLogin(event) {
    toggleModal();
    dispatch(loginUser({ username: username, password: password }));
    event.preventDefault();
  }

  function handleLogout(event) {
    dispatch(logoutUser());
  }

  return (
    <React.Fragment>
      <header>
        <h1>Photo Gallery Manager</h1>
        <div className="links">
          {isAuthenticated ?
            <NavLink to="/photo-upload" className="link">
              Photo Upload
      </NavLink>
            : <div />}
          <NavLink to="/" className="link">
            Galleries
      </NavLink>
          <NavLink to="" onClick={isAuthenticated ? handleLogout : toggleModal} className="link">
            {isAuthenticated ? 'Logout' : 'Login'}
          </NavLink>
        </div>
        <Modal show={isModalOpen} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" id="username" name="username"
                  value={username} onChange={e => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" name="password"
                  value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </header>
    </React.Fragment >
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated || false
});

export default connect(mapStateToProps)(Header);
