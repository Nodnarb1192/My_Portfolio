import React, { useState } from 'react';
import './Projects.css';
import SEO from './SEO';

const CATEGORIES = ['All', 'Data Analysis', 'Machine Learning', 'Deep Learning', 'Software Dev'];

const CATEGORY_COLORS = {
  'Data Analysis':   '#00E6F6',
  'Machine Learning':'#F8F005',
  'Deep Learning':   '#FF013C',
  'Software Dev':    '#39ff14',
};

const projectsData = [
  {
    id: 1,
    title: 'Music Preferences Analysis',
    description: 'Analyzed real Yandex.Music data to compare music preferences between Springfield and Shelbyville, testing hypotheses that could impact business decisions.',
    image: 'project_image_1.png',
    category: 'Data Analysis',
    tags: ['Python', 'Pandas', 'EDA'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%201.%20Basic%20Python',
  },
  {
    id: 2,
    title: 'Instacart EDA',
    description: 'Exploratory data analysis on Instacart grocery platform data to clean datasets and derive insights into customer shopping behaviors.',
    image: 'project_image_2.png',
    category: 'Data Analysis',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%202.%20Exploratory%20Data%20Analysis%20(EDA)',
  },
  {
    id: 3,
    title: 'Megaline Telecom Statistical Analysis',
    description: 'Statistical data analysis for Megaline Telecom evaluating revenue from prepaid plans using Python and statistical methods.',
    image: 'project_image_3.png',
    category: 'Data Analysis',
    tags: ['Python', 'Statistics', 'SciPy'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%203.%20Statistical%20Data%20Analysis',
  },
  {
    id: 4,
    title: 'Vehicle Data Streamlit App',
    description: 'Built and deployed a Streamlit web application for vehicle data visualization, demonstrating full software engineering skills.',
    image: 'project_image_4.png',
    category: 'Software Dev',
    tags: ['Python', 'Streamlit', 'Plotly'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%204.%20Software%20Development%20Tools',
  },
  {
    id: 5,
    title: 'Video Game Success Prediction',
    description: 'Analyzed historical video game sales data to predict trends and identify potential big winners for targeted advertising campaigns.',
    image: 'project_image_5.png',
    category: 'Machine Learning',
    tags: ['Python', 'ML', 'Pandas'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%205.%20Integrated%20Project%201',
  },
  {
    id: 6,
    title: 'Chicago Ride-Sharing Trends',
    description: 'Analyzed Zuber ride-sharing data in Chicago to understand passenger preferences and the impact of weather on ride frequency using SQL.',
    image: 'project_image_6.png',
    category: 'Data Analysis',
    tags: ['SQL', 'Python', 'Statistics'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%206.%20Data%20Collection%20and%20Storage%20(SQL)',
  },
  {
    id: 7,
    title: 'ML Service Plan Upgrade',
    description: 'Developed a model analyzing subscriber behavior for Megaline mobile carrier to recommend optimal plan upgrades with >75% accuracy.',
    image: 'project_image_7.png',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Classification'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%207.%20Introduction%20to%20Machine%20Learning',
  },
  {
    id: 8,
    title: 'Customer Churn Prediction',
    description: 'Built a supervised learning model for Beta Bank to predict customer churn with F1 score exceeding 0.59 and strong AUC-ROC.',
    image: 'project_image_8.png',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'AUC-ROC'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%208.%20Supervised%20Learning',
  },
  {
    id: 9,
    title: 'Oil Well Location Optimization',
    description: 'Found the most profitable oil well locations for OilyGiant mining using predictive modeling and bootstrapped profit analysis.',
    image: 'project_image_9.png',
    category: 'Machine Learning',
    tags: ['Python', 'Linear Regression', 'Bootstrap'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%209.%20Machine%20Learning%20in%20Business',
  },
  {
    id: 10,
    title: 'Gold Recovery Efficiency ML',
    description: 'Created a ML model to predict gold recovery rates from ore, optimizing mining production and eliminating unprofitable parameters.',
    image: 'project_image_10.png',
    category: 'Machine Learning',
    tags: ['Python', 'Regression', 'Feature Engineering'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2010.%20Integrated%20Project%202',
  },
  {
    id: 11,
    title: 'Insurance Predictive Modelling',
    description: 'Applied linear algebra for Sure Tomorrow Insurance to predict benefits, identify similar customers, and protect client data.',
    image: 'project_image_11.png',
    category: 'Machine Learning',
    tags: ['Python', 'Linear Algebra', 'Privacy'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2011.%20Linear%20Algebra',
  },
  {
    id: 12,
    title: 'Used Car Value Prediction',
    description: 'Built a gradient boosting model for Rusty Bargain to quickly predict used car market values from historical specifications.',
    image: 'project_image_12.png',
    category: 'Machine Learning',
    tags: ['Python', 'Gradient Boosting', 'LightGBM'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2012.%20Numerical%20Methods',
  },
  {
    id: 13,
    title: 'Taxi Demand Forecasting',
    description: 'Time series forecasting for Sweet Lift Taxi to predict airport taxi orders per hour for better driver resource management.',
    image: 'project_image_13.png',
    category: 'Machine Learning',
    tags: ['Python', 'Time Series', 'SARIMA'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2013.%20Time%20Series',
  },
  {
    id: 14,
    title: 'Movie Review Sentiment Analysis',
    description: 'Built an NLP model for Film Junky Union to automatically classify movie reviews as positive or negative with F1 score above 0.85.',
    image: 'project_image_14.png',
    category: 'Deep Learning',
    tags: ['Python', 'NLP', 'BERT'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2014.%20Machine%20Learning%20for%20Texts',
  },
  {
    id: 15,
    title: 'Age Verification via Computer Vision',
    description: 'Built a CNN model for Good Seed supermarkets to verify customer age from photographs for alcohol sale compliance.',
    image: 'project_image_15.png',
    category: 'Deep Learning',
    tags: ['Python', 'CNN', 'ResNet'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2015.%20Computer%20Vision',
  },
  {
    id: 16,
    title: 'Telecom Churn Prediction',
    description: 'Final project: comprehensive ML pipeline for Interconnect Telecom to predict customer churn using ensemble methods.',
    image: 'project_image_16.png',
    category: 'Machine Learning',
    tags: ['Python', 'ML Pipeline', 'Ensemble'],
    link: 'https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2017.%20Final%20Project',
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      <SEO
        title="Projects — Data Science & ML Portfolio"
        description="Browse 16 data science and machine learning projects by Brandon Harrelson: NLP, computer vision, time series forecasting, customer churn, and more — all built with Python."
        path="/projects"
      />
      <div className="projects-header">
        <h1 className="text-7xl p-8">Projects</h1>
        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/${project.image})`,
              '--card-color': CATEGORY_COLORS[project.category],
            }}
          >
            <div
              className="project-card__category"
              style={{ background: CATEGORY_COLORS[project.category], color: project.category === 'Machine Learning' ? '#000' : '#000' }}
            >
              {project.category}
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                onClick={e => e.stopPropagation()}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
