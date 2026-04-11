import './button.css';
import './Navbar.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/',        label: 'Home'     },
  { href: '/about',   label: 'About'    },
  { href: '/projects',label: 'Projects' },
  { href: '/contact', label: 'Contact'  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav id="navbar" className="text-white flex justify-between items-center p-6">
      <div id="logo" className="font-bold text-xl">
        <a href="/" className="text-white hover:text-gray-300">Brandon Harrelson</a>
      </div>

      {/* Desktop Nav */}
      <div className="desktop-nav hidden lg:flex">
        {navLinks.map(({ href, label }) => (
          <button
            key={href}
            className={`cybr-btn${isActive(href) ? ' cybr-btn--active' : ''}`}
          >
            <a href={href}>
              <span className="off-hover">{'// '}{label}<span aria-hidden="true">_</span></span>
              <span aria-hidden="true" className="on-hover">{'// '}{label}_</span>
              <span aria-hidden="true" className="cybr-btn__glitch">{'// '}{label}_</span>
              <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
            </a>
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="relative lg:hidden">
        <button
          className="cybr-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="off-hover">{'// '}{isOpen ? 'Close' : 'Menu'}<span aria-hidden="true">_</span></span>
          <span aria-hidden="true" className="on-hover">{'// '}{isOpen ? 'Close' : 'Menu'}_</span>
          <span aria-hidden="true" className="cybr-btn__glitch">{'// '}{isOpen ? 'Close' : 'Menu'}_</span>
          <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
        </button>

        <div className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`}>
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                className={`cybr-btn${isActive(href) ? ' cybr-btn--active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <a href={href}>
                  <span className="off-hover">{'// '}{label}<span aria-hidden="true">_</span></span>
                  <span aria-hidden="true" className="on-hover">{'// '}{label}_</span>
                  <span aria-hidden="true" className="cybr-btn__glitch">{'// '}{label}_</span>
                  <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                </a>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
