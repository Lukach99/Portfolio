import React from 'react';
import Home from '../components/Home';
import Header from '../components/header';

import './App.scss';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function App() {
  return ( 
    
    <div className="App">
      <Header />
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>

      

    </div>
  );
}

export default App;
