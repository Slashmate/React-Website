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
            className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-900 hover:text-white 
                     font-semibold rounded-lg text-sm sm:text-base px-6 py-3 transition-all duration-300 
                     transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                     shadow-lg hover:shadow-xl"
            aria-label="Open contact form to get in touch with SYMS Construction"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </button>
          </div>
        </div>
      )}
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default Hero;
