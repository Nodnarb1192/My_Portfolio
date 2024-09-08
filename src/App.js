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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem('hasVisited')) {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 3000); // Change this value to adjust the duration of the loading screen

            return () => clearTimeout(timer); // This will clear the timer when the component unmounts
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <LoadingScreen />; // Replace this with your loading screen
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
                    <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
                    <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
                    <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;