import React from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'

import './style.css';

function App() {
  return (
    <React.Fragment>  
      <Header />
      <Main />
      <Features />
      <Footer />
    </React.Fragment>

  );
}

export default App;
