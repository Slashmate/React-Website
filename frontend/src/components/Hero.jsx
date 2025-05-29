import React, { useState }  from 'react';
import { useLocation } from 'react-router-dom'; // Import this to get the current route
import HeroImg from './assets/images/Hero.jpg'; // Import your image
import ContactPopup from './Contact';

const Hero = () => {
  const location = useLocation(); // Get the current route

  // Only show the hero image on the landing page ("/")
  const isLandingPage = location.pathname === '/';

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {isLandingPage && (
        <div className="relative w-full h-[80vh]">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold">Your Partner In Infrastructure Growth...</h1>
            <p className="mt-4 text-xl">SYMS CONSTRUCTION PRIVATE LIMITED is Private Limited Company registered under Companies Act, 2013 established in the year 2018 for extending with diversification of company business in very great volume.</p>
            <br/>
            <button
             type="button" 
             onClick={() => setIsPopupOpen(true)}
             className="text-black hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-black">Get In Touch</button>
          </div>
        </div>
      )}
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default Hero;
