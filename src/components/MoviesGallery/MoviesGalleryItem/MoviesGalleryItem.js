import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesGalleryItem.module.css';

const MoviesGalleryItem = ({ poster, title, vote }) => (
  <li className={styles.MoviesGalleryItem}>
    <img
      src={`https://image.tmdb.org/t/p/w300${poster}`}
      alt=""
      // data-url={largeImageURL}
      className={styles.MoviesGalleryItem__image}
    />
    <h2 className={styles.MoviesGalleryItem__title}>{title}</h2>
    <span className={styles.MoviesGalleryItem__vote}>{vote}</span>
  </li>
);

MoviesGalleryItem.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  // tags: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
};

export default MoviesGalleryItem;
