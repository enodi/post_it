import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
    </div>
  </Router>
)

export default Routes;
