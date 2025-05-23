import { useLocation } from 'react-router-dom';
import know_img from './assets/images/knowus.jpg';

const KnowUs = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    if (!isLandingPage) return null;


    return (
        <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 p-5 sm:p-10 m-5 sm:m-10 justify-center items-center '>
            <div className='w-full sm:w-1/2 h-auto'>
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 
                md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 
                dark:decoration-black'>Know Us</h1><br></br>
                <h2 className='text-2xl font-bold dark:text-black'>SYMS CONSTRUCTION PRIVATE LIMITED</h2><br></br>
                <p className='mb-3 text-gray-500 dark:text-gray-700 sm:wrap-normal'>SYMS Construction is a Private Limited Company registered under the Companies Act, 
                    2013 established in the year 2018 for extending with diversification of company business
                     in very great volume. The Company is formed under the Directorship of Mr. Sheshnath 
                     Yadav and Mr. Manoj Kumar Singh.</p>
                <p className='mb-3 text-gray-500 dark:text-gray-700 sm:wrap-normal'>SYMS was incorporated in the year 2018. We have executed Road Projects, 
                    Mumbai Metro, Varsova Bandra Sea link, Heavy Industrial Buildings, Operation 
                    and Maintenance of Highway and Utility Shifting Projects.</p>
                <br className="block sm:hidden" />
            </div>
            <div className='w-[50vh] h-[75vh] bg-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:ring-4 hover:ring-amber-500 hover:ring-offset-4 hover:ring-offset-rose-light'>
                <img className='max-w-full max-h-full object-contain p-5' src={know_img} alt="..." />
            </div>
        </div>
    );
}

export default KnowUs;
