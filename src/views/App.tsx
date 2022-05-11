import React from 'react';
import Home from '../components/Home';
import Header from '../components/header';

import './App.scss';
import About from '../components/About';

function App() {
  return ( 
    
    <div className="App">
      <Header />
      <Home></Home>
      <About></About>

      

    </div>
  );
}

export default App;
