import React from 'react';
import Home from '../components/Home';
import Header from '../components/header';

import './App.scss';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return ( 
    
    <div id='home' className="App">
      <Header />
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

      

    </div>
  );
}

export default App;
