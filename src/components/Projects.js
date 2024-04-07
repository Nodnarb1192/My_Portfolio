import React, { useRef } from 'react';
import './Projects.css';
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
// The Projects component definition
function Projects() {
    const sliderRef = useRef(null); // Reference to the slider container

    // Function to move to the next item in the slider
    const goToNext = () => {
        const slider = sliderRef.current;
        const items = slider.querySelectorAll('.item');
        slider.append(items[0]); // Move the first item to the end
    };

    // Function to move to the previous item in the slider
    const goToPrev = () => {
        const slider = sliderRef.current;
        const items = slider.querySelectorAll('.item');
        slider.prepend(items[items.length - 1]); // Move the last item to the front
    };

    return (
        <div className='main h-lvh'>
            <ul className='slider' ref={sliderRef}>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_1.png)`}}>
                    <div className="content">
                        <h2 className='title'>Music Preferences Analysis in Springfield and Shelbyville</h2>
                        <p className='description'>In this project, we performed analysis on real Yandex.Music data to understand and compare the music preferences of the cities of Springfield and Shelbyville. The goal was to test a series of hypotheses that could impact business decisions.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%201.%20Basic%20Python">
                        <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_2.png)`}}>
                    <div className="content">
                        <h2 className='title'>Exploratory Data Analysis (EDA) on Instacart Data: Summary of Findings</h2>
                        <p className='description'>This project entailed an exploratory data analysis (EDA) on data provided by Instacart, a grocery delivery platform. The primary goal was to clean the data and derive meaningful insights into the shopping behaviors of Instacart's customers.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%202.%20Exploratory%20Data%20Analysis%20(EDA)">
                        <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_3.png)`}}>
                    <div className="content">
                        <h2 className='title'>Statistical Data Analysis for Megaline Telecom: Evaluating Revenue from Prepaid Plans</h2>
                        <p className='description'>The project started with the integration of necessary Python libraries for data analysis and the importing of various CSV files into respective DataFrame structures. The primary goal was to refine and prepare the data for an insightful statistical analysis.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%203.%20Statistical%20Data%20Analysis">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_4.png)`}}>
                    <div className="content">
                        <h2 className='title'>Streamlit Web Application for Vehicle Data Visualization</h2>
                        <p className='description'>This project revolves around the application of key software engineering tasks, aiming to supplement your data skills and increase your marketability for potential employers. The primary tasks involve creating and managing Python virtual environments, developing a web application, and deploying it to a publically accessible cloud service.
                        The project utilized a dataset of car sales advertisements, although the focus was not primarily on the dataset or the analysis. You're free to choose any dataset that interests you.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%204.%20Software%20Development%20Tools">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_5.png)`}}>
                    <div className="content">
                        <h2 className='title'>Integrated Project 1: Video Game Success Prediction</h2>
                        <p className='description'>This project focuses on analyzing historical video game sales data to predict trends that could determine the success of a game. We aim to identify potential big winners and plan advertising campaigns accordingly. Our dataset contains user and expert reviews, genres, platforms (e.g. Xbox or PlayStation), and sales data from various regions dating back to 2016.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%205.%20Integrated%20Project%201">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_6.png)`}}>
                    <div className="content">
                        <h2 className='title'>Insights into Ride-sharing Trends for Zuber in Chicago</h2>
                        <p className='description'>This project involves analyzing data for Zuber, a new ride-sharing company that's launching in Chicago. Our aim is to understand passenger preferences and the impact of external factors such as weather on ride frequency. We will be parsing weather data, analyzing taxi ride data, and testing a hypothesis about the impact of weather on ride frequency.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%206.%20Data%20Collection%20and%20Storage%20(SQL)">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_7.png)`}}>
                    <div className="content">
                        <h2 className='title'>Exploring User Behavior with Machine Learning for Service Upgrade</h2>
                        <p className='description'>The goal of this project is to develop a model that analyzes subscribers' behavior for a mobile carrier, Megaline, to recommend one of their newer plans: Smart or Ultra. The aim is to transition users from legacy plans to the new ones. The model's accuracy needs to exceed a threshold of 0.75. The data available for this project is monthly behavior information of subscribers who already switched to new plans.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%207.%20Introduction%20to%20Machine%20Learning">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_8.png)`}}>
                    <div className="content">
                        <h2 className='title'>Customer Churn Prediction Using Supervised Learning</h2>
                        <p className='description'>Beta Bank is facing a customer churn problem. The aim of this project is to build a predictive model to identify customers who are likely to churn. This can allow the bank to proactively address their issues and improve retention. The model needs to have an F1 score of at least 0.59. Additionally, we will measure the AUC-ROC metric and compare it with the F1.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%208.%20Supervised%20Learning">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_9.png)`}}>
                    <div className="content">
                        <h2 className='title'>Optimizing Resource Allocation with Machine Learning: A Case Study for the Oil Industry</h2>
                        <p className='description'>The project involves working for the OilyGiant mining company with the goal of finding the most profitable location for a new oil well. The process includes collecting oil well parameters, building a predictive model for volume reserves, and ultimately choosing the region that promises the highest total profit.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%209.%20Machine%20Learning%20in%20Business">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_10.png)`}}>
                    <div className="content">
                        <h2 className='title'>SEnhancing Gold Recovery Efficiency: Implementing Machine Learning in the Mining Industry</h2>
                        <p className='description'>The project involves creating a prototype machine learning model to predict the recovery rate of gold from gold ore. The aim is to optimize the production and eliminate unprofitable parameters, leading to more profits and lesser harm to the environment.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2010.%20Integrated%20Project%202">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_11.png)`}}>
                    <div className="content">
                        <h2 className='title'>Optimizing Insurance Predictive Modelling and Data Protection Using Linear Algebra</h2>
                        <p className='description'>Sure Tomorrow Insurance company wanted to use machine learning to solve several of their tasks. These included identifying similar customers, predicting if a customer would receive an insurance benefit, predicting the number of insurance benefits a new customer might receive, and ensuring client data is protected. This report summarizes the findings of the project.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2011.%20Linear%20Algebra">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_12.png)`}}>
                    <div className="content">
                        <h2 className='title'>Implementing Numerical Methods for Used Car Market Value Prediction</h2>
                        <p className='description'>Rusty Bargain, a used car sales service, is developing an application to quickly find out the market value of a car. To aid this process, a model to determine the car's value was built based on historical data including technical specifications, trim versions, and prices.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2012.%20Numerical%20Methods">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_13.png)`}}>
                    <div className="content">
                        <h2 className='title'>Time Series Analysis for Taxi Demand Forecasting</h2>
                        <p className='description'>Sweet Lift Taxi company, which provides taxi services at airports, needed to forecast the number of taxi orders for the next hour in order to manage resources better, specifically to ensure adequate number of drivers during peak hours. For this task, historical data on taxi orders was available.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2013.%20Time%20Series">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_14.png)`}}>
                    <div className="content">
                        <h2 className='title'>Automated Sentiment Analysis for Movie Reviews</h2>
                        <p className='description'>The Film Junky Union, an engaging community for classic movie enthusiasts, has embarked on a project to develop a system for filtering and categorizing movie reviews. They are interested in training a model capable of automatically identifying negative reviews. The task involved the use of an IMDb movie reviews dataset, which had been labeled according to sentiment polarity. The aim was to construct a model capable of classifying reviews as positive or negative with an F1 score of at least 0.85.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2014.%20Machine%20Learning%20for%20Texts">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_15.png)`}}>
                    <div className="content">
                        <h2 className='title'>Using Computer Vision for Age Verification in Supermarkets</h2>
                        <p className='description'>Good Seed, a supermarket chain, is exploring the potential of Data Science to ensure their adherence to alcohol laws, specifically regarding the sale of alcohol to underage individuals. This project was undertaken to build and evaluate a model capable of verifying a person's age from a photograph.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2015.%20Computer%20Vision">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
                <li className='item' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/project_image_16.png)`}}>
                    <div className="content">
                        <h2 className='title'>Culmination Project: Predicting Customer Churn for Interconnect Telecom</h2>
                        <p className='description'>The final sprint aimed at applying the knowledge and skills acquired over the course of the previous sprints in a practical setting, with tasks structured to mimic real-world work environments. The main project involved developing a machine learning model prototype following specific instructions. Additionally, an extra assignment was given, which contributed to the final score. Successful completion of the sprint required attaining at least five story points (SP), units for measuring the difficulty of a task.</p>
                        <a href="https://github.com/Nodnarb1192/TripleTen/tree/main/Sprint%2017.%20Final%20Project">
                            <StyledButton>
                            Read More
                        </StyledButton>
                        </a>
                    </div>
                </li>
            </ul>
            <div className='nav'>
                <StyledButton content="Previous" marginRight="20px" onClick={goToPrev}>Previous</StyledButton>
                <StyledButton content="Next" transform="scaleX(-1)" onClick={goToNext}><span>Next</span></StyledButton>
            </div>
        </div>
    );
}

export default Projects;