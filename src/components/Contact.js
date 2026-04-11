import React, { useState } from "react";
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import SEO from './SEO';

const glitch = keyframes`
  0%   { clip-path:var(--slice-1); transform:translate(-20px,-10px); }
  10%  { clip-path:var(--slice-3); transform:translate(10px,10px); }
  20%  { clip-path:var(--slice-1); transform:translate(-10px,10px); }
  30%  { clip-path:var(--slice-3); transform:translate(0px,5px); }
  40%  { clip-path:var(--slice-2); transform:translate(-5px,0px); }
  50%  { clip-path:var(--slice-3); transform:translate(5px,0px); }
  60%  { clip-path:var(--slice-4); transform:translate(5px,10px); }
  70%  { clip-path:var(--slice-2); transform:translate(-10px,10px); }
  80%  { clip-path:var(--slice-5); transform:translate(20px,-10px); }
  90%  { clip-path:var(--slice-1); transform:translate(-10px,0px); }
  100% { clip-path:var(--slice-1); transform:translate(-20px,-10px); }
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
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        content: "Submit";
        display: block;
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
        text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
        clip-path: inset(50% 50% 50% 50%);
    }

    &:hover::after {
        animation: 1s ${glitch};
        animation-timing-function: steps(2, end);
    }
`;

const inputStyle = {
    width: '100%',
    borderRadius: '0',
    border: '1px solid #00E6F6',
    background: 'rgba(0, 0, 0, 0.55)',
    color: '#fff',
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: "'Cyber', sans-serif",
    letterSpacing: '1px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
};

const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontFamily: "'Cyber', sans-serif",
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#00E6F6',
};

function CyberInput({ type = 'text', name, id, placeholder }) {
    const [focused, setFocused] = useState(false);
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            style={{
                ...inputStyle,
                borderColor: focused ? '#FF013C' : '#00E6F6',
                boxShadow: focused ? '0 0 14px rgba(255,1,60,0.35), inset 0 0 8px rgba(255,1,60,0.08)' : '0 0 6px rgba(0,230,246,0.15)',
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    );
}

function CyberTextarea({ name, id, placeholder, rows }) {
    const [focused, setFocused] = useState(false);
    return (
        <textarea
            rows={rows}
            name={name}
            id={id}
            placeholder={placeholder}
            style={{
                ...inputStyle,
                resize: 'none',
                borderColor: focused ? '#FF013C' : '#00E6F6',
                boxShadow: focused ? '0 0 14px rgba(255,1,60,0.35), inset 0 0 8px rgba(255,1,60,0.08)' : '0 0 6px rgba(0,230,246,0.15)',
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    );
}

function Contact() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastSuccess, setToastSuccess] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name    = e.target.elements.name.value;
        const from    = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const text    = e.target.elements.message.value;

        try {
            await axios.post(`${API_BASE_URL}/send-email`, { name, from, subject, text });
            setToastMessage('// TRANSMISSION SUCCESSFUL_');
            setToastSuccess(true);
        } catch (error) {
            setToastMessage('// TRANSMISSION FAILED_');
            setToastSuccess(false);
        }
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
            <SEO
                title="Contact Me"
                description="Get in touch with Brandon Harrelson for freelance Python development, data science consulting, or software engineering projects. Based in Huffman, TX."
                path="/contact"
            />
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Left — contact info */}
                        <div
                            className="p-6 mr-2 rounded-lg"
                            style={{
                                backgroundImage: 'url(/contact-overlay.png)',
                                backgroundBlendMode: 'multiply',
                                backgroundSize: 'cover',
                            }}
                        >
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "'Cyberpunk', sans-serif", color: '#fff', textShadow: '0 0 12px rgba(0,230,246,0.5)' }}>
                                Get in touch
                            </h1>
                            <p className="text-lg sm:text-2xl font-medium mt-2" style={{ color: '#00E6F6', fontFamily: "'Cyber', sans-serif", letterSpacing: '1px' }}>
                                // Fill in the form to start a conversation_
                            </p>

                            {/* Location */}
                            <div className="flex items-center mt-8" style={{ color: '#fff' }}>
                                <svg fill="none" stroke="#00E6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div className="ml-4 tracking-wide font-semibold" style={{ fontFamily: "'Cyber', sans-serif" }}>
                                    Huffman, TX 77336
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center mt-4" style={{ color: '#fff' }}>
                                <svg fill="none" stroke="#00E6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div className="ml-4 tracking-wide font-semibold" style={{ fontFamily: "'Cyber', sans-serif" }}>
                                    +1 832 882 0214
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-2 pb-4" style={{ color: '#fff' }}>
                                <svg fill="none" stroke="#00E6F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div className="ml-4 tracking-wide font-semibold" style={{ fontFamily: "'Cyber', sans-serif" }}>
                                    Brandon_H92@outlook.com
                                </div>
                            </div>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <iframe
                                    title="Map of Huffman, TX 77336"
                                    width="250"
                                    height="250"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=30.023029806900013,-95.08993148803712+(%22%22)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    style={{ borderRadius: '4px', border: '1px solid #00E6F6', boxShadow: '0 0 16px rgba(0,230,246,0.3)' }}
                                    alt="google maps of huffman, tx 77336"
                                >
                                    <a href="https://www.gps.ie/">gps systems</a>
                                </iframe>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div className="mx-auto w-full max-w-[550px] p-4">
                            <form action="/send-email" method="POST" onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="name" style={labelStyle}>Full Name</label>
                                    <CyberInput name="name" id="name" placeholder="FULL NAME" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" style={labelStyle}>Email Address</label>
                                    <CyberInput type="email" name="email" id="email" placeholder="EXAMPLE@DOMAIN.COM" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="subject" style={labelStyle}>Subject</label>
                                    <CyberInput name="subject" id="subject" placeholder="SUBJECT" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="message" style={labelStyle}>Message</label>
                                    <CyberTextarea name="message" id="message" placeholder="TYPE YOUR MESSAGE" rows="4" />
                                </div>
                                <div>
                                    <StyledButton type="submit">Submit</StyledButton>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* Cyberpunk Toast */}
            {showToast && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '1.5rem',
                        right: '1.5rem',
                        background: 'rgba(0, 0, 0, 0.92)',
                        border: `1px solid ${toastSuccess ? '#00E6F6' : '#FF013C'}`,
                        boxShadow: `0 0 20px ${toastSuccess ? 'rgba(0,230,246,0.45)' : 'rgba(255,1,60,0.45)'}`,
                        color: toastSuccess ? '#00E6F6' : '#FF013C',
                        padding: '1rem 2rem',
                        fontFamily: "'Cyber', sans-serif",
                        fontSize: '14px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        zIndex: 50,
                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                    }}
                >
                    {toastMessage}
                </div>
            )}
        </div>
    );
}

export default Contact;
