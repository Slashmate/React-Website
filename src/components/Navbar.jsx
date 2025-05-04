import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const NavLinks = ({ isMobile = false }) => {
  const [menu, setmenu] = useState("App");

  const baseClasses = 'hover:opacity-60';
  const activeLine = (name) => menu === name ? <hr /> : null;

  const links = [
    { name: "App", to: "/", label: "Home" },
    { name: "About", to: "/about", label: "About Us" },
    { name: "Team", to: "/team", label: "Team" },
    { name: "Project", to: "/project", label: "Projects" },
    { name: "Services", to: "/services", label: "Our Services" },
    { name: "Career", to: "/career", label: "Career" },
    { name: "Contact", to: "/contact", label: "Contact Us" },
  ];

  return (
    <ul className={`${isMobile ? 'flex flex-col gap-4 items-center' : 'hidden md:flex justify-between flex-row gap-7'}`}>
      {links.map(link => (
        <li
          key={link.name}
          className={baseClasses}
          onClick={() => setmenu(link.name)}
        >
          <Link to={link.to}>{link.label}</Link>
          {activeLine(link.name)}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
  };
  return(
    <>
    <nav >
      <div className="hidden md:flex justify-between flex-row gap-7">
        <NavLinks />
      </div>
      <div className='md:hidden'>
        <button onClick={toggleNavbar}>
          {isOpen ? <X/>:<Menu/>}
        </button>
      </div>
    </nav>
    {isOpen && (
      <div className='flex flex-col items-center gap-2 basis-full text-center'>
        <NavLinks isMobile={true}/>
      </div>
    )}
    </>
  );
};


export default Navbar;
