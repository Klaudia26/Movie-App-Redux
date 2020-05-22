import React from 'react';
import Modal from './Modal';
import { closeModalUser } from '../../actions';
import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserModal = ({ closeModalUser }) => {
  const renderBody = () => {
    return (
      <>
        <div>
          <FaUser />
          <h3>User Name</h3>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" onClick={closeModalUser}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/watchlist" onClick={closeModalUser}>
                Watchlist
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeModalUser}>
                Settings Account
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      <Modal body={renderBody()} closeModal={closeModalUser} />
    </div>
  );
};

export default connect(null, { closeModalUser })(UserModal);
