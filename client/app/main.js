import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/app';

class Main extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}
window.onload = () => {
  render(<Main />, document.getElementById('root'));
};