import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header.jsx';  // <-- Removing the extension from this import, it fails when running it with `npm run serve`


class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
