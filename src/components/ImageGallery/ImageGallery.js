import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ movies }) => (
  <ul className={styles.ImageGallery}>
    {movies.map(({ id, poster_path, vote_average, title }) => (
      <ImageGalleryItem
        key={id}
        poster={poster_path}
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
  // onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
