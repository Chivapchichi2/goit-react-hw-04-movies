import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ poster, title, vote }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={`https://image.tmdb.org/t/p/w300${poster}`}
      alt=""
      // data-url={largeImageURL}
      className={styles.ImageGalleryItem__image}
    />
    <h2 className={styles.ImageGalleryItem__title}>{title}</h2>
    <span className={styles.ImageGalleryItem__vote}>{vote}</span>
  </li>
);

ImageGalleryItem.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  // tags: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
