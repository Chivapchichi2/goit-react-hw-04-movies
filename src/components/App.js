import React, { Component } from 'react';
import api from '../services/galleryApi';
import Button from './Button';
import Container from './Container';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import MyLoader from './MyLoader';
import Notification from './Notification';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: '',
    loader: false,
    showModal: false,
    url: '',
    tag: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.fetchImages()
        // eslint-disable-next-line
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loader: false }));
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loader: true });
    return api.findImage(query, page).then((images) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        error: '',
      }));
    });
  };

  handleOnButtonClick = () => {
    this.fetchImages()
      .then(() =>
        // eslint-disable-next-line
        window.scrollTo({
          // eslint-disable-next-line
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  handleFormData = ({ query }) => {
    this.setState({
      page: 1,
      query,
      images: [],
      error: '',
    });
  };

  handleImageClick = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    const { url } = target.dataset;
    const tag = target.alt;
    this.setState({
      url,
      tag,
      loader: true,
    });
    this.toggleModal();
  };

  toggleModal = () => this.setState((prevState) => ({ showModal: !prevState.showModal }));

  hideLoaderInModal = () => this.setState({ loader: false });

  render() {
    const {
 images, error, loader, showModal, url, tag, 
} = this.state;
    return (
      <Container>
        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.handleImageClick}>
            {loader && <MyLoader />}
            <img src={url} alt={tag} onLoad={this.hideLoaderInModal} />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormData} />
        {error && <Notification message="Something wrong :(" />}
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {loader && !showModal && <MyLoader />}
        {!loader && images[0] && <Button onClick={this.handleOnButtonClick} />}
      </Container>
    );
  }
}

export default App;
