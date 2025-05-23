import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KnowUs from './components/KnowUs';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <KnowUs />
      <Services />
    </div>
  );
}

export default App;
