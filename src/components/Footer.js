import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="flex flex-col min-[100vh]">
            <div className="flex-1">
        <footer className="w-full relative pt-8 pb-6">
            <div class="w-full mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                    Find Me on any of these platforms.
                    </h5>
                    <div class="mt-6 lg:mb-0 mb-6">
                    <a href="https://www.facebook.com/brandon.harrelson1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <button className="bg-[#fff700] text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </button>
                    </a>
                    <a href="https://github.com/Nodnarb1192" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <button className="bg-[#fff700] text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </a>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-6">
                    <div class="w-full lg:w-4/12 px-4 ml-auto">
                        <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                        <ul class="list-unstyled">
                        <li>
                            <a class="text-black font-semibold block pb-2 text-sm" href="/about">About Us</a>
                        </li>
                        <li>
                            <a class="text-black font-semibold block pb-2 text-sm" href="https://github.com/Nodnarb1192">Github</a>
                        </li>
                        <li>
                            <a class="text-black font-semibold block pb-2 text-sm" href="/contact">Contact Me</a>
                        </li>
                        </ul>
                    </div>
              
                    </div>
                </div>
                </div>
                        <div className="w-full">
                            <hr className="w-full my-6 border-black" />
                        </div>
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                </footer>
            </div>
        </div>
        
    );
};

export default Footer;