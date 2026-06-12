import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('boot');

    if (el) {
      const line = '> initializing neural interface... [OK] > loading operator profile... [OK]';
      if (prefersReduced) {
        el.textContent = line;
      } else {
        const plain = '> initializing neural interface... ';
        let i = 0;
        const type = () => {
          if (i <= plain.length) {
            el.textContent = plain.slice(0, i);
            i += 1;
            setTimeout(type, 28);
          } else {
            el.textContent = '> initializing neural interface... [OK]  > operator profile loaded [OK]';
          }
        };
        type();
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            entry.target.querySelectorAll('.fill').forEach((fill) => {
              fill.style.width = `${fill.dataset.w}%`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cyber-app">
      <nav>
        <div className="logo"><b>brandon@harrelson</b>:~$ ./portfolio<span className="cursor"></span></div>
        <ul className="nav-links">
          <li><a href="#about"><span>01.</span> About</a></li>
          <li><a href="#skills"><span>02.</span> Skills</a></li>
          <li><a href="#projects"><span>03.</span> Projects</a></li>
          <li><a href="#contact"><span>04.</span> Contact</a></li>
        </ul>
      </nav>

      <div className="hud tl"><span className="bracket">┌</span> SYS.ONLINE</div>
      <div className="hud tr">29.85°N / 95.10°W <span className="bracket">┐</span></div>
      <div className="hud bl"><span className="bracket">└</span> NODE: HUFFMAN_TX</div>
      <div className="hud br">BUILD v2.0.26 <span className="bracket">┘</span></div>

      <main>
        <section className="hero">
          <div className="boot" id="boot" aria-hidden="true"></div>
          <h1><span className="glitch" data-text="BRANDON">BRANDON</span><br /><span className="glitch" data-text="HARRELSON">HARRELSON</span></h1>
          <div className="role">Python Developer <span className="sep">//</span> Data Scientist</div>
          <p className="intro">I build machine learning systems, data pipelines, and full-stack applications that turn raw data into working products. Based outside Houston, shipping worldwide.</p>
          <div className="cta-row">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn alt" href="#contact">Initiate Contact</a>
          </div>
          <div className="scroll-hint">▼ SCROLL</div>
        </section>

        <section id="about" className="reveal">
          <div className="sys-label">SYS://01 — IDENTITY</div>
          <h2>About <em>the Operator</em></h2>
          <div className="about-grid">
            <div>
              <p>I'm a <b>Python developer and data scientist</b> based in Huffman, Texas. I work at the intersection of software engineering and machine learning — building everything from predictive models and NLP pipelines to the Django and React applications that put them in front of real users.</p>
              <p>My toolkit runs deep on the data side: <b>Pandas, Scikit-learn, SQL</b>, and the modeling workflows that go with them — classification, regression, clustering, computer vision, and natural language processing. On the engineering side, I ship production web apps with <b>Django, Flask, and React</b>.</p>
              <p>I'm currently <b>available for freelance development and data consulting</b>. If you have data and a problem, I can build the thing that solves it.</p>
            </div>
            <div className="datacard">
              <div className="row"><span className="k">HANDLE</span><span className="v">B.HARRELSON</span></div>
              <div className="row"><span className="k">CLASS</span><span className="v">DEV / DATA_SCI</span></div>
              <div className="row"><span className="k">LOCATION</span><span className="v">HUFFMAN, TX [US]</span></div>
              <div className="row"><span className="k">PRIMARY_LANG</span><span className="v">PYTHON 3.x</span></div>
              <div className="row"><span className="k">SPEC</span><span className="v">ML · NLP · CV</span></div>
              <div className="row"><span className="k">STATUS</span><span className="v hot">OPEN FOR FREELANCE</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="reveal">
          <div className="sys-label">SYS://02 — CAPABILITIES</div>
          <h2>Skill <em>Matrix</em></h2>
          <div className="skill-cols">
            <div className="skill-box">
              <h3>Machine Learning</h3>
              <span className="tag">// MODULE: INTELLIGENCE</span>
              <div className="bar"><div className="lbl"><b>Scikit-learn</b><span>92%</span></div><div className="track"><div className="fill" data-w="92"></div></div></div>
              <div className="bar"><div className="lbl"><b>NLP</b><span>88%</span></div><div className="track"><div className="fill" data-w="88"></div></div></div>
              <div className="bar"><div className="lbl"><b>Computer Vision</b><span>84%</span></div><div className="track"><div className="fill" data-w="84"></div></div></div>
              <div className="bar"><div className="lbl"><b>Model Deployment</b><span>86%</span></div><div className="track"><div className="fill" data-w="86"></div></div></div>
            </div>
            <div className="skill-box">
              <h3>Data Engineering</h3>
              <span className="tag">// MODULE: PIPELINE</span>
              <div className="bar"><div className="lbl"><b>Python</b><span>95%</span></div><div className="track"><div className="fill" data-w="95"></div></div></div>
              <div className="bar"><div className="lbl"><b>Pandas / NumPy</b><span>93%</span></div><div className="track"><div className="fill" data-w="93"></div></div></div>
              <div className="bar"><div className="lbl"><b>SQL</b><span>90%</span></div><div className="track"><div className="fill" data-w="90"></div></div></div>
              <div className="bar"><div className="lbl"><b>Data Visualization</b><span>89%</span></div><div className="track"><div className="fill" data-w="89"></div></div></div>
            </div>
            <div className="skill-box">
              <h3>Full-Stack Dev</h3>
              <span className="tag">// MODULE: INTERFACE</span>
              <div className="bar"><div className="lbl"><b>Django</b><span>90%</span></div><div className="track"><div className="fill" data-w="90"></div></div></div>
              <div className="bar"><div className="lbl"><b>Flask</b><span>88%</span></div><div className="track"><div className="fill" data-w="88"></div></div></div>
              <div className="bar"><div className="lbl"><b>React</b><span>85%</span></div><div className="track"><div className="fill" data-w="85"></div></div></div>
              <div className="bar"><div className="lbl"><b>REST APIs</b><span>91%</span></div><div className="track"><div className="fill" data-w="91"></div></div></div>
            </div>
          </div>
        </section>

        <section id="projects" className="reveal">
          <div className="sys-label">SYS://03 — DEPLOYMENTS</div>
          <h2>Project <em>Archive</em></h2>
          <div className="proj-grid">
            <article className="proj">
              <span className="id">LOG_001 // CAPSTONE — CLASSIFICATION</span>
              <h3>Interconnect Telecom Churn</h3>
              <p>End-to-end churn prediction for a telecom operator: EDA surfaced that monthly subscribers and fiber-optic users churn hardest (especially in the first four months), then a model was built to flag at-risk customers for targeted retention offers.</p>
              <div className="metric">TARGET: <b>AT-RISK CUSTOMER DETECTION</b></div>
              <div className="stack"><span className="chip">Python</span><span className="chip">Scikit-learn</span><span className="chip">Pandas</span><span className="chip">EDA</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2017.%20Final%20Project" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
            <article className="proj">
              <span className="id">LOG_002 // COMPUTER VISION</span>
              <h3>Age Verification CNN</h3>
              <p>Deep learning model for the Good Seed supermarket chain that estimates a customer's age from a photo to support alcohol-law compliance. Fine-tuned a pre-trained ResNet50 on GPU, testing dropout and learning-rate configurations.</p>
              <div className="metric">BEST MAE: <b>6.0 YEARS</b> // RESNET50</div>
              <div className="stack"><span className="chip">TensorFlow</span><span className="chip">ResNet50</span><span className="chip">Keras</span><span className="chip">GPU</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2015.%20Computer%20Vision" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
            <article className="proj">
              <span className="id">LOG_003 // NLP</span>
              <h3>Movie Review Sentiment Engine</h3>
              <p>Automated sentiment classifier for the Film Junky Union, trained on labeled IMDb reviews. Compared NLTK vs. spaCy lemmatization, TF-IDF features, logistic regression, gradient boosting, and DistilBERT — beating the required F1 threshold.</p>
              <div className="metric">F1 SCORE: <b>&gt; 0.85</b> // IMDB CORPUS</div>
              <div className="stack"><span className="chip">NLP</span><span className="chip">NLTK</span><span className="chip">spaCy</span><span className="chip">TF-IDF</span><span className="chip">BERT</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2014.%20Machine%20Learning%20for%20Texts" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
            <article className="proj">
              <span className="id">LOG_004 // TIME SERIES</span>
              <h3>Taxi Demand Forecaster</h3>
              <p>Hourly demand forecasting for Sweet Lift Taxi's airport fleet. Resampled and decomposed historical order data, engineered time features, and benchmarked models — LightGBM won, letting dispatch staff drivers ahead of peak hours.</p>
              <div className="metric">RMSE: <b>44.08</b> (LIMIT: 48) // LIGHTGBM</div>
              <div className="stack"><span className="chip">Time Series</span><span className="chip">LightGBM</span><span className="chip">Pandas</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2013.%20Time%20Series" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
            <article className="proj">
              <span className="id">LOG_005 // ML IN BUSINESS</span>
              <h3>Oil Well Site Selection</h3>
              <p>Profit-optimization study for OilyGiant: regression models predicted reserve volumes across three regions, then bootstrapping with 1,000 samples quantified expected profit, 95% confidence intervals, and downside risk before recommending a region.</p>
              <div className="metric">RISK FILTER: <b>&lt; 2.5% LOSS PROBABILITY</b></div>
              <div className="stack"><span className="chip">Regression</span><span className="chip">Bootstrapping</span><span className="chip">NumPy</span><span className="chip">Scikit-learn</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%209.%20Machine%20Learning%20in%20Business" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
            <article className="proj">
              <span className="id">LOG_006 // FULL-STACK DEPLOY</span>
              <h3>Vehicle Market Dashboard</h3>
              <p>Interactive web app for exploring US car-sales listings — histograms, scatter plots, and filter controls built with Streamlit and Plotly Express, version-controlled on GitHub and deployed live to the cloud on Render.</p>
              <div className="metric">STATUS: <b>DEPLOYED TO PRODUCTION</b></div>
              <div className="stack"><span className="chip">Streamlit</span><span className="chip">Plotly</span><span className="chip">Render</span><span className="chip">Git</span></div>
              <a className="link" href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%204.%20Software%20Development%20Tools" target="_blank" rel="noopener noreferrer">Access Project</a>
            </article>
          </div>
          <p className="archive-link">
            <a href="https://github.com/Nodnarb1192/TripleTen" target="_blank" rel="noopener noreferrer">&gt;&gt; ACCESS FULL ARCHIVE — 17 SPRINTS ON GITHUB</a>
          </p>
        </section>

        <section id="contact" className="reveal">
          <div className="sys-label">SYS://04 — UPLINK</div>
          <div className="contact-wrap">
            <div className="contact-inner">
              <div className="status">Status: Accepting Freelance Contracts</div>
              <h2>Open a <em>Channel</em></h2>
              <p>Need a machine learning model, a data pipeline, or a full-stack application built? I'm available for freelance development and data consulting. Send a transmission.</p>
              <div className="contact-links">
                <a className="btn" href="mailto:hello@brandonharrelson.com">Send Email</a>
                <a className="btn alt" href="https://github.com/Nodnarb1192" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn" href="https://www.linkedin.com/in/brandon-harrelson-137a3b108/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 BRANDON HARRELSON — ALL SYSTEMS NOMINAL</span>
        <span className="sig">DESIGNED IN THE SPRAWL // HUFFMAN_TX</span>
      </footer>
    </div>
  );
}

export default App;
