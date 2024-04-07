import React from "react";
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
const StyledButton = styled.a`
    width: 200px;
    height: 40px;
    font-size: 16px;
    padding: 8px;
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

function About() {
    return (
        <div>
            <div className="text-center">

                <h1 className="text-7xl p-8 ">About Me</h1>
                <StyledButton href={process.env.PUBLIC_URL + "/Brandon_Harrelson.pdf"} download content="Download Resume">
                    Download Resume
                </StyledButton>
                <h2 className="text-5xl p-8">Introduction:</h2>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-8 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto'}}>Hello and welcome! I'm Brandon Harrelson, a dynamic and multifaceted professional with a rich background in Python Development, Software Engineering, Data Analysis, and Data Science. With a passion for problem-solving, innovation, and leveraging the power of data, I've embarked on a fascinating journey through the realms of technology and development. My career spans a broad spectrum, from software development and big data management to mechanical systems and quality assurance, highlighting my versatility and commitment to excellence in every endeavor.</p>
                </div>
                <h2 className="text-5xl p-8">My Background:</h2>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-8 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p style={{ maxWidth: '1000px', lineHeight: '1.5', margin: '0 auto'}} className="p-8">Born into the world of technology and innovation, I embarked on my professional journey with a foundational education from Tulsa Welding School, specializing in Welding. My curiosity and drive for continuous learning led me to expand my horizons into the tech field, where I completed a rigorous Data Science Program with TripleTen Online. This program was a turning point, equipping me with in-depth knowledge and practical expertise in Python, data analysis, machine learning, and database management.
                My career took a significant leap at Odyssey Analytics, where as a Python Developer, I've been instrumental in developing solutions for Big Data, architecting large-scale Data Lake Houses, and enhancing product capabilities through innovative Python applications. My work has not only increased client satisfaction by 25% but has also improved system efficiency by 20%, showcasing my ability to deliver impactful and sustainable solutions.
                Prior to Odyssey Analytics, I honed my skills in mechanical systems and quality control at positions ranging from Leadman Mechanical at UNION TANK CAR COMPANY to Inspector at UNIVERSAL STEEL AMERICA. These roles instilled in me a strong sense of leadership, teamwork, and a meticulous approach to problem-solving.
                </p>
                </div>
                <h2 className="text-5xl p-8">professional philosophy:</h2>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-8 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto'}} className="p-8">My approach to work is guided by a relentless pursuit of innovation, integrity, and continuous improvement. I am deeply committed to utilizing the transformative power of data and technology to drive business growth, enhance operational efficiency, and improve lives. Through meticulous analysis, creative engineering, and a forward-thinking mindset, I strive to deliver solutions that are not only effective but also sustainable and innovative.</p>
                </div>
                <h2 className="text-5xl p-8">Personal Intrest:</h2>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-8 mx-auto max-w-3xl" style={{ border: '1px solid black' }}>
                <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto'}} className="p-8">Outside of my professional life, I am an avid learner and enjoy exploring new technologies and methodologies in the field of data science and software engineering. I believe in giving back to the community and engage in volunteer work that leverages my technical skills to make a difference.</p>
                </div>
            </div>
            <div>
                <h1 className="text-5xl pt-8">My Skills:</h1>
                <div className="bg-[#fff700] bg-opacity-35 rounded-2xl p-8 mx-auto max-w-7xl" style={{ border: '1px solid black' }}>
                <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 py-8">
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        <h2 className="text-3xl mb-4">Backend Development</h2>
                        <ul className="list-none ml-4">
                            <li>Python</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        <h2 className="text-3xl mb-4">Frontend Development</h2>
                        <ul className="list-none ml-4">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        <h2 className="text-3xl mb-4">Data Science</h2>
                        <ul className="list-none ml-4">
                            <li>Machine Learning</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                            <li>SciPy</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        <h2 className="text-3xl mb-4">Data Analytics</h2>
                        <ul className="list-none ml-4">
                            <li>SQL</li>
                            <li>Data Visualization</li>
                            <li>Tableau</li>
                            <li>Power BI</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

        </div>

    );
    }

export default About;
