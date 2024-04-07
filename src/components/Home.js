import React from "react";
import './Home.css';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
    // line-height: 88px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;
    
    & > span {
        display: inline-block;
        transform: scalex(-1);
    }

    &::after {
        --slice-0:inset(50% 50% 50% 50%);
        --slice-1:inset(80% -6px 0 0);
        --slice-2:inset(50% -6px 30% 0);
        --slice-3:inset(10% -6px 85% 0);
        --slice-4:inset(40% -6px 43% 0);
        --slice-5:inset(80% -6px 5% 0);
        content: "${props => props.content || 'Read More'}";
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

function Home() {
    return (
        <div>
            <div className="p-8">
                <h1 className="text-center lg:text-7xl md: text-4xl">Empowering Innovation Through Data and Development</h1>
                <h2 className="text-center lg:text-5xl md: text-2xl">Python Developer | Software Engineer | Data Analyst | Data Scientist</h2>
                <div>
                    <div className="wrapper">
                        <input type="checkbox" id="check" hidden />
                        <div className="viewport">
                            <img src={process.env.PUBLIC_URL + '/hero.png'} alt="Hero Image" className="main-img rounded-3xl"/>
                            <div className="ab ab-1"></div>
                            <div className="ab ab-2"></div>
                            <div className="ab ab-3"></div>
                            <div className="ab ab-4"></div>
                            <div className="ab ab-5"></div>
                            <div className="line">
                                <div className="line-supwrap">
                                    <img src={process.env.PUBLIC_URL + '/hero.png'} alt="Hero Image" className="line-img"/>
                                    <div class="ab ab-1"></div>
                                    <div class="ab ab-2"></div>
                                    <div class="ab ab-3"></div>
                                    <div class="ab ab-4"></div>
                                    <div class="ab ab-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-4 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p className="lg: text-xl pt-8"> Dive into the world where data meets innovation.</p> 
                <p className="lg: text-xl"> Explore how my expertise in Python, software engineering, and data analytics transforms challenges into solutions.</p>
                <Link to="/projects">
                <StyledButton content="Projects" >Projects</StyledButton>
                </Link>
                </div>
            </div>
            <div>
                <h1 className="text-5xl">Brief About Me</h1>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-4 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p className="text-xl" style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto'}}>
                    I am a Python Developer, Software Engineer, Data Analyst, and Data Scientist. I am passionate about data and technology.
                    I have a strong background in Python, software engineering, and data analytics. I have a proven track record of delivering high-quality results 
                    in a fast-paced environment. I am a quick learner and a team player. I am always looking for new challenges and 
                    opportunities to grow. I am excited to work on projects that make a positive impact on the world. I am looking forward to working with you.
                </p>
                <Link to="/about">
                <StyledButton content="Get to Know me" >Get to Know me</StyledButton>
                </Link>
                </div>
            </div>
        </div>

    );
    }

export default Home;
