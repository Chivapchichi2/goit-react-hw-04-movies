import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import api from '../services/galleryApi';
import Button from '../components/Button';
import MoviesGallery from '../components/MoviesGallery';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    error: '',
    loader: false,
  };

  async componentDidMount() {
    try {
      this.setState({ movies: [], page: 1, error: '', loader: true });
      const { page } = this.state;
      const movies = await api.getTrendingMovies(page);
      this.addTrendingMoviesToState(movies);
    } catch (err) {
      this.setState({ error: err });
    }
  }

  handleOnButtonClick = () => {
    this.setState({ loader: true });
    const { page } = this.state;
    api
      .getTrendingMovies(page)
      .then(this.addTrendingMoviesToState)
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loader: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  addTrendingMoviesToState = someMovies => {
    this.setState(prevState => ({
      movies: Array.from(
        new Set([...prevState.movies, ...someMovies].map(JSON.stringify)),
      ).map(JSON.parse),
      page: prevState.page + 1,
      error: '',
      loader: false,
    }));
  };

  render() {
    const { error, movies, loader } = this.state;
    return (
      <>
        {error && <Notification message="Something wrong :(" />}
        <MoviesGallery movies={movies} />
        {loader && <MyLoader />}
        {!loader && movies[0] && <Button onClick={this.handleOnButtonClick} />}
      </>
    );
  }
}

export default HomePage;
