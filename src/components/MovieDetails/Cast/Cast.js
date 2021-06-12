import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '../../../services/moviesApi';

class Cast extends Component {
  state = { name: 'Cast' };

  // componentDidMount() {}

  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default Cast;
