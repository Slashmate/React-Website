import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import serviceImg1 from './assets/images/service1.jpg';
import serviceImg2 from './assets/images/service2.jpg';
import serviceImg3 from './assets/images/service3.jpg';

const slides = [
    {
        image: serviceImg1,
        title: 'Road Projects',
        description: 'We have successfully executed national and state highway road projects across India.',
    },
    {
        image: serviceImg2,
        title: 'Metro & Sea Link',
        description: 'Our team contributed to Mumbai Metro and the iconic Varsova Bandra Sea Link.',
    },
    {
        image: serviceImg3,
        title: 'Industrial Buildings',
        description: 'We’ve built large-scale heavy industrial structures for various industries.',
    },
];

const ServicesSlider = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    if (!isLandingPage) return null;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Optional: auto-slide every 5 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    const currentSlide = slides[currentIndex];

    return (
        <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 p-5 sm:p-10 m-5 sm:m-10 justify-center items-center'>
            {/* Image Section */}
            <div className='hidden sm:flex w-[50vh] h-[75vh] bg-white rounded-xl shadow-lg items-center justify-center 
                transition-all duration-300 hover:ring-4 hover:ring-amber-500 hover:ring-offset-4 hover:ring-offset-rose-light'>
                <img className='max-w-full max-h-full object-contain p-5' src={currentSlide.image} alt={currentSlide.title} />
            </div>
            {/* Text Section */}
            <div className='w-full sm:w-1/2 h-auto flex flex-col justify-between'>
                <div>
                    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 
                        md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 
                        dark:decoration-black'>
                        Our Services
                    </h1>
                    <br />
                    <h2 className='text-2xl font-bold dark:text-black'>{currentSlide.title}</h2>
                    <p className='mt-3 text-gray-500 dark:text-gray-700'>{currentSlide.description}</p>
                </div>

            <div className='block sm:hidden w-full h-[50vh] bg-white rounded-xl shadow-lg items-center justify-center 
                 transition-all duration-300 hover:ring-4 hover:ring-amber-500 hover:ring-offset-4 hover:ring-offset-rose-light mt-5t'>
                <img className='max-w-full max-h-full object-contain p-5' src={currentSlide.image} alt={currentSlide.title} />
            </div>

                {/* Slide Controls */}
                <div className="mt-5 flex gap-4 justify-center">
                    <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                        Prev
                    </button>
                    <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSlider;

