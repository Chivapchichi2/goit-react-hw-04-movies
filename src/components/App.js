import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  </Container>
);

export default App;
