import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ movies }) => (
  <ul className={styles.ImageGallery}>
    {movies.map(
      ({ id, poster_path: posterPath, vote_average: voteAverage, title }) => (
        <ImageGalleryItem
          key={id}
          poster={posterPath}
          vote={voteAverage}
          title={title}
          // tags={tags}
          // largeImageURL={largeImageURL}
        />
      ),
    )}
  </ul>
);

ImageGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
