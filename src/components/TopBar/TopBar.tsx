import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { updateKeyword } from "../../actions";
import { getUserSelector, isModalOpenSelector } from "../../reducers";

import { logout, LogoutAction } from "../../actions/UserActions";
import { NavLink } from "react-router-dom";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import UserModal from "../Modal/UserModal";
import "./TopBar.scss";

interface Props {
  isModalUser: boolean;
  keyword: string;
  movies: any;
  user: any;
  logout: () => LogoutAction;
  updateKeyword: any;
}
interface State {
  isUserModal: boolean;
}
class TopBar extends Component<Props, State> {
  state: State = {
    isUserModal: false,
  };

  openModalUser = () => {
    this.setState({
      isUserModal: true,
    });
  };

  closeModalUser = (): void => {
    this.setState({
      isUserModal: false,
    });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.updateKeyword(e.target.value);
  };
  render() {
    return (
      <div className="topBar">
        <div className="container">
          <NavLink to="/">
            <div className="logo">
              <GoDeviceCameraVideo />
            </div>
          </NavLink>
          {/* TODO #1 change the color of the logo */}
          <div>
            <input
              type="text"
              value={this.props.keyword}
              onChange={this.handleChange}
              placeholder="Search any movies or tv shows"
              className="search"
            />
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/movies" activeClassName="active">
                  Movies
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/tvshows">TV Shows</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/watchlist">Watchlist</NavLink>
              </li>

              {this.props.user ? (
                <li className="nav__item" onClick={() => this.openModalUser()}>
                  <NavLink to="/">
                    <FaUser />
                  </NavLink>
                </li>
              ) : (
                <li className="nav__item">
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              )}

              {this.state.isUserModal ? (
                <UserModal
                  closeModal={this.closeModalUser}
                  logout={this.props.logout}
                />
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies,
    keyword: state.keyword,
    isModalUser: isModalOpenSelector(state),
    user: getUserSelector(state),
  };
};

export default connect(mapStateToProps, { updateKeyword, logout })(TopBar);
