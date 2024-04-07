import React, { useState } from "react";
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
0%{
    clip-path:var(--slice-1);
    transform:translate(-20px,-10px);
  }
  10%{
    clip-path:var(--slice-3);
    transform:translate(10px,10px);
  }
  20%{
      clip-path:var(--slice-1);
    transform:translate(-10px,10px);
  }
  30%{
      clip-path:var(--slice-3);
    transform:translate(0px,5px);
  }
  40%{
      clip-path:var(--slice-2);
    transform:translate(-5px,0px);
  }
  50%{
      clip-path:var(--slice-3);
    transform:translate(5px,0px);
  }
  60%{
      clip-path:var(--slice-4);
    transform:translate(5px,10px);
  }
  70%{
      clip-path:var(--slice-2);
    transform:translate(-10px,10px);
  }
  80%{
      clip-path:var(--slice-5);
    transform:translate(20px,-10px);
  }
  90%{
      clip-path:var(--slice-1);
    transform:translate(-10px,0px);
  }
  100%{
      clip-path:var(--slice-1);
    transform:translate(-20px,-10px);
  }
`;

const StyledButton = styled.button`
    width: 380px;
    height: 86px;
    font-size: 36px;
    font-family: 'cyber';
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
    border: 0;
    color: #ffffff;
    letter-spacing: 3px;
    line-height: 88px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;

    &::after {
        --slice-0:inset(50% 50% 50% 50%);
        --slice-1:inset(80% -6px 0 0);
        --slice-2:inset(50% -6px 30% 0);
        --slice-3:inset(10% -6px 85% 0);
        --slice-4:inset(40% -6px 43% 0);
        --slice-5:inset(80% -6px 5% 0);
        content: "Submit";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
        text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
        clip-path: inset(50% 50% 50% 50%);
    }

    &:hover::after {
        animation: 1s ${glitch};
        animation-timing-function: steps(2, end);
    }
`;

function Contact() {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const from = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const text = e.target.elements.message.value;
        
    
        try {
            await axios.post('http://localhost:3000/send-email', { from, subject, name, text });
            setToastMessage('Email sent successfully');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        } catch (error) {
            // On error, show error toast
            setToastMessage('Error sending email');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        }
    }

    return (
    <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 dark:bg-gray-800 rounded-lg" style={{
                backgroundImage: 'url(/contact-overlay.png)',
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover'
            }}>
                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                </p>

                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        Huffman, TX 77336
                    </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        +1 832 882 0214
                    </div>
                </div>

                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400 pb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        Brandon_H92@outlook.com
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <iframe 
                        title="Map of Huffman, TX 77336"
                        width="250" 
                        height="250" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=30.023029806900013,-95.08993148803712+(%22%22)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        style={{borderRadius: "15px"}}
                        alt='google maps of huffman, tx 77336'
                    >
                        <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>
                </div>
            </div>

            <div class="mx-auto w-full max-w-[550px]">
                <form action="/send-email" method="POST" onSubmit={handleSubmit}>
                    <div class="mb-5">
                        <label
                        for="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Full Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        for="subject"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        for="message"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Message
                        </label>
                        <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <StyledButton>
                            Submit
                        </StyledButton>
                    </div>
                    </form>
            </div>
        </div>
            </div>
        </div>
            {/* toast that appears in the bottom right */}
        {showToast && (
            <div
                style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    zIndex: 50,
                }}
            >
                {toastMessage}
            </div>
        )}
        

    </div>
    

    );
}

export default Contact;
