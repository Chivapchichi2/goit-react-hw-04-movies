import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './Container';
import HomePage from '../views/HomePage';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/movies" component={MoviesPage} /> */}
      {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
      {/* <Route exact path="/movies/:movieId/cast" component={HomeView} /> */}
      {/* <Route exact path="/movies/:movieId/reviews" component={HomeView} /> */}
    </Switch>
  </Container>
);

export default App;
