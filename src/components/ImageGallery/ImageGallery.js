import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ movies, onClick }) => (
  // eslint-disable-next-line
  <ul className={styles.ImageGallery} onClick={onClick}>
    {movies.map(({
 id, poster_path, vote_average, title, 
}) => (
      <ImageGalleryItem
        key={id}
        // eslint-disable-next-line
        poster={poster_path}
        // eslint-disable-next-line
        vote={vote_average}
        title={title}
        // tags={tags}
        // largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
