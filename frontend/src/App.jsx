import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KnowUs from './components/KnowUs';
import Services from './components/Services';
import Clientele from './components/Clientele';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <KnowUs />
      <Services />
      <Clientele />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
