import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../services/galleryApi';
import Button from '../components/Button';
import MovieDetails from '../components/MovieDetails';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';

class MovieDetailsPage extends Component {
  state = { movie: '', loader: false };

  async componentDidMount() {
    this.setState({ loader: true });
    const id = this.props.match.params.movieId;
    const response = await api.getMovieById(id);
    const movie = response.data;
    this.setState({ movie, loader: false });
  }

  handlerOnButtonClick = from => () => this.props.history.push(from);

  render() {
    const { loader, movie } = this.state;
    const { from } = this.props.location.state;
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
        <Button name="<<< Go back" onClick={this.handlerOnButtonClick(from)} />
        {loader && <MyLoader />}
        {title ? (
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
        ) : (
          <Notification message="Sorry, no data :(, try again" />
        )}
      </>
    );
  }
}

MovieDetailsPage.defaultProps = {
  match: { params: { movieId: 0 } },
  location: { state: { from: { pathname: '/' } } },
};

MovieDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape(),
    }),
  }),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default MovieDetailsPage;
