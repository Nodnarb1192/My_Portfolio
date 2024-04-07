import './button.css';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav id="navbar" className=" text-white flex justify-between items-center p-6">
        <div id="logo" className="font-bold text-xl">
          <a href="/" className="text-white hover:text-gray-300">Brandon Harrelson</a>
        </div>
        {/* Normal Buttons */}
        <div className={`${isOpen ? 'hidden' : 'hidden'} md:hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto flex-col justify-end`}>
            <div className="text-sm lg:flex-grow">
                <div id="buttons" className={`${isOpen ? '' : 'hidden'}`} >
                    <button className="cybr-btn">
                        <a href="/"> 
                            <span className="off-hover">// Home<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Home_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Home_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/about"> 
                            <span className="off-hover">// About<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// About_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// About_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/projects"> 
                            <span className="off-hover">// Projects<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Projects_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Projects_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/contact"> 
                            <span className="off-hover">// Contact<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Contact_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Contact_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
        {/* Hamburger Button */}
        <div className="relative lg:hidden">
            <button className="cybr-btn" onClick={() => setIsOpen(!isOpen)}>
                <span className="off-hover">// Menu<span aria-hidden="true">_</span></span>
                <span aria-hidden="true" className="on-hover">// Menu_</span>
                <span aria-hidden="true" className="cybr-btn__glitch">// Menu_</span>
                <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
            </button>
        {/* Hamburger Menu */}
            <div className={`${isOpen ? 'absolute right-0 top-[80px] z-50 pt-4': 'hidden'} md:hidden `}>
                <div className="flex flex-col space-y-4">
                    <button className="cybr-btn">
                        <a href="/"> 
                            <span className="off-hover">// Home<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Home_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Home_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/about"> 
                            <span className="off-hover">// About<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// About_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// About_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/projects"> 
                            <span className="off-hover">// Projects<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Projects_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Projects_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                    <button className="cybr-btn">
                        <a href="/contact"> 
                            <span className="off-hover">// Contact<span aria-hidden="true">_</span></span>
                            <span aria-hidden="true" className="on-hover">// Contact_</span>
                            <span aria-hidden="true" className="cybr-btn__glitch">// Contact_</span>
                            <span aria-hidden="true" className="cybr-btn__tag">BH92</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  