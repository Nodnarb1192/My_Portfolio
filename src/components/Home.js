import React, { useState, useEffect } from "react";
import './Home.css';
import styled, { keyframes } from 'styled-components';
import { useScrollReveal } from '../hooks/useScrollReveal';
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
    width: 200px;
    height: 40px;
    font-size: 24px;
    transform: ${props => props.transform || 'none'};
    margin-right: ${props => props.marginRight || '0px'};
    font-family: 'cyber';
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
    border: 0;
    color: #ffffff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;

    & > span {
        display: inline-block;
        transform: scalex(-1);
    }

    &::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        content: "${props => props.content || 'Read More'}";
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

const HEADLINE = 'Empowering Innovation Through Data and Development';

function Home() {
    const [displayText, setDisplayText] = useState('');
    const [typingDone, setTypingDone] = useState(false);
    const boxRef1 = useScrollReveal();
    const boxRef2 = useScrollReveal();

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < HEADLINE.length) {
                setDisplayText(HEADLINE.slice(0, i + 1));
                i++;
            } else {
                setTypingDone(true);
                clearInterval(interval);
            }
        }, 42);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <SEO
                title="Python Developer & Data Scientist"
                description="Brandon Harrelson — Python Developer, Software Engineer, and Data Scientist based in Huffman, TX. Specializing in machine learning, data analytics, and full-stack development."
                path="/"
            />
            <div className="p-8">
                <h1 className="text-center lg:text-7xl md:text-4xl" style={{ minHeight: '1.2em' }}>
                    {displayText}
                    {!typingDone && <span className="typewriter-cursor" />}
                </h1>
                <h2
                    className="text-center lg:text-5xl md:text-2xl"
                    style={{
                        opacity: typingDone ? 1 : 0,
                        transform: typingDone ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                >
                    Python Developer | Software Engineer | Data Analyst | Data Scientist
                </h2>

                <div>
                    <div className="wrapper">
                        <input type="checkbox" id="check" hidden />
                        <div className="viewport">
                            <img src={process.env.PUBLIC_URL + '/hero.png'} alt="Hero" className="main-img rounded-3xl" />
                            <div className="ab ab-1"></div>
                            <div className="ab ab-2"></div>
                            <div className="ab ab-3"></div>
                            <div className="ab ab-4"></div>
                            <div className="ab ab-5"></div>
                            <div className="line">
                                <div className="line-supwrap">
                                    <img src={process.env.PUBLIC_URL + '/hero.png'} alt="Hero" className="line-img" />
                                    <div className="ab ab-1"></div>
                                    <div className="ab ab-2"></div>
                                    <div className="ab ab-3"></div>
                                    <div className="ab ab-4"></div>
                                    <div className="ab ab-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={boxRef1}
                    className="scroll-reveal cyber-box p-4 mx-auto max-w-3xl"
                >
                    <p className="lg:text-xl pt-8">Dive into the world where data meets innovation.</p>
                    <p className="lg:text-xl">Explore how my expertise in Python, software engineering, and data analytics transforms challenges into solutions.</p>
                    <a href="/projects">
                        <StyledButton content="Projects">Projects</StyledButton>
                    </a>
                </div>
            </div>

            <div>
                <h1 className="text-5xl">Brief About Me</h1>
                <div
                    ref={boxRef2}
                    className="scroll-reveal cyber-box p-4 mx-auto max-w-3xl"
                >
                    <p className="text-xl" style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto' }}>
                        I am a Python Developer, Software Engineer, Data Analyst, and Data Scientist. I am passionate about data and technology.
                        I have a strong background in Python, software engineering, and data analytics. I have a proven track record of delivering high-quality results
                        in a fast-paced environment. I am a quick learner and a team player. I am always looking for new challenges and
                        opportunities to grow. I am excited to work on projects that make a positive impact on the world. I am looking forward to working with you.
                    </p>
                    <a href="/about">
                        <StyledButton content="Get to Know me">Get to Know me</StyledButton>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
