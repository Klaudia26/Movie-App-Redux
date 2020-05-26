import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/UserActions';
import { setLocalStorage } from '../../localStorage/localStorage';
import './SignupForm.scss';

class SignupForm extends Component {
  state = {
    user: {
      name: '',
      surname: '',
      email: '',
    },
    errors: [],
  };

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/');
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
      errors: [],
    });
  };

  isFormValid = () => {
    const errors = [];

    if (this.isFiledEmpty()) {
      errors.push({ message: 'Fill in the empty fields.' });
    }

    if (this.isEmailValid()) {
      errors.push({ message: 'Your emial is incorrect.' });
    }

    if (errors.length) {
      this.setState({
        errors: errors,
      });
      return false;
    }

    return true;
  };

  isEmailValid = () => {
    return !this.state.user.email.includes('@');
  };

  isFiledEmpty = () => {
    return (
      !this.state.user.name.length ||
      !this.state.user.surname.length ||
      !this.state.user.email.length
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.isFormValid();

    if (!isValid) {
      return;
    }

    setLocalStorage('user', this.state.user);
    this.props.addUser(this.state.user);

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="signupForm main">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="wrapper">
            <input
              type="text"
              value={this.state.user.name}
              onChange={this.handleChange}
              onBlur={this.handleBlure}
              name="name"
              id="name"
              className="input"
              placeholder=" "
            />
            <label htmlFor="name" className="label">
              Name
            </label>
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={this.state.user.surname}
              onChange={this.handleChange}
              name="surname"
              id="surname"
              className="input"
              placeholder=" "
            />
            <label htmlFor="surname" className="label">
              Surname
            </label>
          </div>

          <div className="wrapper">
            <input
              type="email"
              value={this.state.user.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              className="input"
              placeholder=" "
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <button type="submit" className="btn btn-form">
            Create account
          </button>
        </form>
        <div className="error-message">
          {this.state.errors.length > 0 &&
            this.state.errors.map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { addUser })(SignupForm);
