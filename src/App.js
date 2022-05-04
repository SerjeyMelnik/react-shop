
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Footer />

    </div>
  );
}

export default App;
