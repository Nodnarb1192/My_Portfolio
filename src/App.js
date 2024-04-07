import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notfound from './components/Notfound';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/loading';
import Footer from './components/Footer';

import {HashRouter, Route, Routes } from 'react-router-dom';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check if the user has visited the site before
        if (!localStorage.getItem('hasVisited')) {
            setLoading(true);

            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000); // Change this value to adjust the duration of the loading screen

            // Set the flag in localStorage
            localStorage.setItem('hasVisited', 'true');

            return () => clearTimeout(timer); // This will clear the timer when the component unmounts
        }
    }, []);

    if (loading) {
        return <LoadingScreen />; // Replace this with your loading screen
    }

    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
                    <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
                    <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
                    <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;