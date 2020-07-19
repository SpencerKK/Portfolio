import React from 'react';
import './App.css';

// Components
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;