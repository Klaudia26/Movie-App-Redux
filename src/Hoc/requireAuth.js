import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (WrappedComponent) => {
  class HOComponent extends Component {
    componentDidMount() {
      if (!this.props.user) {
        this.props.history.push('/');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  return connect(mapStateToProps)(HOComponent);
};

export default requireAuth;
