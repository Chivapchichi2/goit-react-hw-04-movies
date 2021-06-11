import React, { Component } from 'react';
import api from '../services/galleryApi';
import Button from '../components/Button';
import MoviesGallery from '../components/MoviesGallery';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import SearchBar from '../components/Searchbar';

class MoviesPage extends Component {
  state = {
    movies: [],
    page: 1,
    error: '',
    loader: false,
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      try {
        // eslint-disable-next-line
        this.setState({ loader: true });
        const movies = await api.getByQueryMovies(query, page);
        this.addMoviesToState(movies, page);
      } catch (err) {
        // eslint-disable-next-line
        this.setState({ error: err });
      }
    }
  }

  handleOnButtonClick = page => () => {
    const { query } = this.state;
    this.setState({ loader: true });
    api
      .getByQueryMovies(query, page)
      .then(movies => this.addMoviesToState(movies, page))
      .then(
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loader: false });
      });
  };

  addMoviesToState = (movies, page) => {
    this.setState({ movies, page, error: '', loader: false });
  };

  handleFormData = ({ query }) => {
    this.setState({
      page: 1,
      query,
      movies: [],
      error: '',
    });
  };

  render() {
    // console.log(this.props.match.url);
    const { error, movies, loader, page } = this.state;
    const showButtons = !loader && movies[0] && true;
    const disabled = true;
    return (
      <>
        <SearchBar onSubmit={this.handleFormData} />
        {error && <Notification message="Something wrong :(" />}
        {movies[0] && <MoviesGallery movies={movies} />}
        {loader && <MyLoader />}
        {showButtons && (
          <>
            {page === 1 ? (
              <Button
                onClick={this.handleOnButtonClick(page - 1)}
                name={`<<< Prev page ${page - 1}`}
                disabled={disabled}
              />
            ) : (
              <Button
                onClick={this.handleOnButtonClick(page - 1)}
                name={`<<< Prev page №${page - 1}`}
              />
            )}
            <Button
              onClick={this.handleOnButtonClick(page)}
              name={`Current page №${page}`}
              disabled={disabled}
            />
            <Button
              onClick={this.handleOnButtonClick(page + 1)}
              name={`Next page ${page + 1} >>>`}
            />
          </>
        )}
      </>
    );
  }
}

export default MoviesPage;
