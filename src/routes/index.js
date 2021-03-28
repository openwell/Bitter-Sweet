import React from 'react';
import { Router, Redirect } from '@reach/router';
import Home from '../pages/home';
import Gender from '../pages/gender';
import Questions from '../pages/questions';
import ThankYou from '../pages/thankYou';
export default function Index() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Gender path="/gender" />
      <Questions path="/start" />
      <ThankYou path="/thank-you" />
      <Redirect from="*" to="/" noThrow />
    </Router>
  );
}
