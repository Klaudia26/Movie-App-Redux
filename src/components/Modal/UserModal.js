import React from 'react';
import Modal from './Modal';
import { clearLocalStorage } from '../../localStorage/localStorage';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserModal = ({ closeModal, logout }) => {
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
              <Link to="/" onClick={closeModal}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/watchlist" onClick={closeModal}>
                Watchlist
              </Link>
            </li>
            <li>
              <Link to="/account" onClick={closeModal}>
                Settings Account
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                  clearLocalStorage('user');
                  closeModal();
                }}
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      <Modal body={renderBody()} closeModal={closeModal} />
    </div>
  );
};

export default UserModal;
