import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import api from '../services/galleryApi';
import MoviesGallery from '../components/ImageGallery';
import Notification from '../components/Notification';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    error: '',
  };

  async componentDidMount() {
    const { page } = this.state;
    try {
      const movies = await api.getTrendingMovies(page);
      this.setState(prevState => ({
        movies: [...prevState.movies, ...movies],
        page: prevState.page + 1,
      }));
    } catch (err) {
      this.setState({ error: err });
    }
  }

  // async componentDidUpdate(prevProps, prevState) {

  // }

  render() {
    const { error, movies } = this.state;
    return (
      <>
        {error && <Notification message="Something wrong :(" />}
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default HomePage;
