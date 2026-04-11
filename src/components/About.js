import React, { useEffect, useRef } from "react";
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
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;

    & > span { display: inline-block; transform: scalex(-1); }

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

const SKILL_CATEGORIES = [
  {
    title: 'Backend Development',
    color: '#00E6F6',
    skills: [
      { name: 'Python',  level: 95 },
      { name: 'Django',  level: 75 },
      { name: 'Flask',   level: 70 },
      { name: 'Node.js', level: 65 },
    ],
  },
  {
    title: 'Frontend Development',
    color: '#FF013C',
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'React',      level: 75 },
      { name: 'HTML5',      level: 90 },
      { name: 'CSS3',       level: 82 },
    ],
  },
  {
    title: 'Data Science',
    color: '#ff00a0',
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Pandas',           level: 95 },
      { name: 'NumPy',            level: 90 },
      { name: 'SciPy',            level: 80 },
    ],
  },
  {
    title: 'Data Analytics',
    color: '#8ae66e',
    skills: [
      { name: 'SQL',                level: 85 },
      { name: 'Data Visualization', level: 90 },
      { name: 'Tableau',            level: 75 },
      { name: 'Power BI',           level: 70 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('skill-fill--filled');
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item">
      <div className="skill-label">
        <span>{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          ref={ref}
          className="skill-fill"
          style={{
            '--skill-width': `${level}%`,
            '--skill-color': color,
            '--skill-delay': delay,
          }}
        />
      </div>
    </div>
  );
}

function About() {
  const introRef   = useScrollReveal();
  const bgRef      = useScrollReveal();
  const philoRef   = useScrollReveal();
  const interestRef= useScrollReveal();
  const skillsRef  = useScrollReveal();

  return (
    <div>
      <SEO
        title="About Me — Background & Skills"
        description="Learn about Brandon Harrelson's background in Python development, data science, machine learning, and software engineering. View skills, experience, and professional philosophy."
        path="/about"
      />
      <div className="text-center">
        <h1 className="text-7xl p-8">About Me</h1>
        <StyledButton href="/resume.html" target="_blank" rel="noopener noreferrer" content="View Resume">
          View Resume
        </StyledButton>

        <h2 className="text-5xl p-8">Introduction:</h2>
        <div
          ref={introRef}
          className="scroll-reveal cyber-box p-8 mx-auto max-w-3xl"
        >
          <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto' }}>
            Hello and welcome! I'm Brandon Harrelson — a Python Developer, Data Scientist, and Operations Leader based in Greater Houston, TX.
            My career bridges two worlds: nearly 3 years architecting Big Data solutions as a Python Developer at Odyssey Analytics, and 10+
            years of industrial leadership in quality assurance and compliance. I completed a rigorous Data Science bootcamp at TripleTen, where
            I was awarded for Stellar Performance, and I hold five Python certifications. I bring the analytical mindset of a data scientist and
            the accountability of a proven team leader to every challenge I take on.
          </p>
        </div>

        <h2 className="text-5xl p-8">My Background:</h2>
        <div
          ref={bgRef}
          className="scroll-reveal cyber-box p-8 mx-auto max-w-3xl"
        >
          <p style={{ maxWidth: '1000px', lineHeight: '1.5', margin: '0 auto' }} className="p-8">
            My journey began in the trades — after completing a Welding Technology program at Tulsa Welding School, I spent years in
            industrial environments honing discipline, precision, and leadership. My drive for continuous learning led me to Python programming
            and ultimately to TripleTen's Data Science bootcamp, where I built expertise in machine learning, NLP, computer vision, and time
            series forecasting — earning an award for stellar performance along the way.
            From 2021 to 2024, I applied that knowledge professionally as a Python Developer at Odyssey Analytics, where I architected
            large-scale Data Lake Houses, automated data pipelines with Python, PostgreSQL, and AWS, and increased client satisfaction by 25%
            and system efficiency by 20%. Currently I serve as Repair Supervisor at Eagle Railcar Services, where I lead teams of 30+
            technicians and apply data-driven thinking to improve compliance, safety, and operational outcomes — while actively seeking my
            next challenge in software or data engineering.
          </p>
        </div>

        <h2 className="text-5xl p-8">Professional Philosophy:</h2>
        <div
          ref={philoRef}
          className="scroll-reveal cyber-box p-8 mx-auto max-w-3xl"
        >
          <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto' }} className="p-8">
            I believe the most impactful work happens at the intersection of rigorous analysis and real-world accountability. Whether I'm
            building a machine learning pipeline, leading a compliance audit, or optimizing a team workflow, my standard is the same:
            measure it, improve it, document it. I value clean code, honest data, and solutions that hold up under pressure. My dual
            background in tech and industry operations means I naturally think about how systems fail and how to make them more resilient
            — a perspective that pure lab-environment engineers rarely develop.
          </p>
        </div>

        <h2 className="text-5xl p-8">Personal Interests:</h2>
        <div
          ref={interestRef}
          className="scroll-reveal cyber-box p-8 mx-auto max-w-3xl"
        >
          <p style={{ maxWidth: '800px', lineHeight: '1.5', margin: '0 auto' }} className="p-8">
            Outside of my professional life, I am an avid learner and enjoy exploring new technologies and methodologies in the field of data
            science and software engineering. I believe in giving back to the community and engage in volunteer work that leverages my
            technical skills to make a difference.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-5xl pt-8 text-center">My Skills:</h1>
        <div
          ref={skillsRef}
          className="scroll-reveal mx-auto max-w-7xl"
          style={{ background: 'transparent' }}
        >
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="skill-panel-border"
                style={{ '--panel-color': cat.color }}
              >
                <div className="skill-category">
                  <h2 style={{ color: '#fff', borderBottom: `2px solid ${cat.color}`, paddingBottom: '0.5rem', marginBottom: '1.25rem', textShadow: `0 0 8px ${cat.color}` }}>
                    {cat.title}
                  </h2>
                  {cat.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={`${i * 0.12}s`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
