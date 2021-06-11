import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../services/galleryApi';
// import Button from '../components/Button';
import MovieDetails from '../components/MovieDetails';
import MyLoader from '../components/MyLoader';
// import Notification from '../components/Notification';

class MovieDetailsPage extends Component {
  state = { movie: '', loader: false };

  async componentDidMount() {
    this.setState({ loader: true });
    const id = this.props.match.params.movieId;
    const response = await api.getMovieById(id);
    const movie = response.data;
    this.setState({ movie, loader: false });
  }

  render() {
    const { loader, movie } = this.state;
    const {
      title,
      poster_path: poster,
      tagline,
      genres,
      budget,
      revenue,
      release_date: date,
      overview,
      vote_average: average,
      vote_count: count,
    } = movie;
    return (
      <>
        {loader && <MyLoader />}
        <MovieDetails
          title={title}
          poster={poster}
          tagline={tagline}
          genres={genres}
          budget={budget}
          revenue={revenue}
          date={date}
          overview={overview}
          average={average}
          count={count}
        />
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: PropTypes.shape().isRequired,
  params: PropTypes.shape().isRequired,
  movieId: PropTypes.number.isRequired,
};

export default MovieDetailsPage;
