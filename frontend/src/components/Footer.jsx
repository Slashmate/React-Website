import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-amber-400 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Social Icons */}

                <div className=" text-gray-500 text-sm mt-6 ">
                    <p>
                        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white transition"
                    >
                        {/* Facebook SVG icon */}
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H8v-2.9h2.5V9.4c0-2.47 1.48-3.84 3.75-3.84 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.9h-2.32v6.98A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-white transition"
                    >
                        {/* Twitter SVG icon */}
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.28 4.28 0 0 0 1.88-2.37 8.4 8.4 0 0 1-2.7 1.03 4.21 4.21 0 0 0-7.17 3.83 11.95 11.95 0 0 1-8.68-4.4 4.2 4.2 0 0 0 1.3 5.63 4.14 4.14 0 0 1-1.9-.52v.05a4.22 4.22 0 0 0 3.37 4.13 4.22 4.22 0 0 1-1.9.07 4.22 4.22 0 0 0 3.93 2.92A8.44 8.44 0 0 1 2 19.54 11.9 11.9 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 22.46 6z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition"
                    >
                        {/* LinkedIn SVG icon */}
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5a2.5 2.5 0 1 1-.001 5.001 2.5 2.5 0 0 1 .001-5.001zM3 8.98h4v12H3v-12zm7 0h3.7v1.75h.05a4.1 4.1 0 0 1 3.68-2c3.94 0 4.66 2.6 4.66 6v6.25h-4v-5.5c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.87v5.6h-4v-12z" />
                        </svg>
                    </a>
                </div>
                <div className=" text-gray-500 text-sm mt-6 ">
                    <p >
                        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
