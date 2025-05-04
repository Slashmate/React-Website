import React from 'react';
import know_img from './assets/images/knowus.jpg';

const KnowUs = () => {

    return (
        <div className='flex flex-row gap-25 p-10 m-10 justify-center '>
            <div className='w-[50vh] h-[75vh]'>
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 
                md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 
                dark:decoration-black'>Know Us</h1><br></br>
                <h2 className='text-2xl font-bold dark:text-black'>SYMS CONSTRUCTION PRIVATE LIMITED</h2><br></br>
                <p className='mb-3 text-gray-500 dark:text-gray-700'>SYMS Construction is a Private Limited Company registered under the Companies Act, 
                    2013 established in the year 2018 for extending with diversification of company business
                     in very great volume. The Company is formed under the Directorship of Mr. Sheshnath 
                     Yadav and Mr. Manoj Kumar Singh.</p>
                <p className='mb-3 text-gray-500 dark:text-gray-700'>SYMS was incorporated in the year 2018. We have executed Road Projects, 
                    Mumbai Metro, Varsova Bandra Sea link, Heavy Industrial Buildings, Operation 
                    and Maintenance of Highway and Utility Shifting Projects.</p>
            </div>
            <div className='w-[50vh] h-[75vh] bg-white rounded-xl shadow-lg transition-all duration-300 hover:ring-4 hover:ring-amber-500 hover:ring-offset-4 hover:ring-offset-rose-light'>
                <img className='w-[45vh] h-[70vh] p-5' src={know_img} alt="" />
            </div>
        </div>
    );
}

export default KnowUs;
