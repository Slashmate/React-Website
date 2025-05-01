import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="sticky bg-amber-400 top-0 mx-auto flex w-full max-w-7x1 flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary">
            <Logo />
            <Navbar />
        </div>
    );
};

export default Header;
