import React from 'react';
import Home from '../components/Home';
import Header from '../components/header';

import './App.scss';
import About from '../components/About';
import Projects from '../components/Projects';

function App() {
  return ( 
    
    <div className="App">
      <Header />
      <Home></Home>
      <About></About>
      <Projects></Projects>

      

    </div>
  );
}

export default App;
