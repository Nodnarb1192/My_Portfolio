import React, { useState, useEffect } from 'react';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notfound from './components/Notfound';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/loading';
import Footer from './components/Footer';
import CyberCursor from './components/CyberCursor';
import MatrixRain from './components/MatrixRain';
import PageTransition from './components/PageTransition';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem('hasVisited')) {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <HelmetProvider>
        <Router>
            <div className="App">
                {loading ? (
                    <LoadingScreen />
                ) : (
                    <>
                        <CyberCursor />
                        <MatrixRain />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PageTransition>
                                        <Navbar />
                                        <Home />
                                        <Footer />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <PageTransition>
                                        <Navbar />
                                        <About />
                                        <Footer />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/projects"
                                element={
                                    <PageTransition>
                                        <Navbar />
                                        <Projects />
                                        <Footer />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <PageTransition>
                                        <Navbar />
                                        <Contact />
                                        <Footer />
                                    </PageTransition>
                                }
                            />
                            <Route path="*" element={<Notfound />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
        </HelmetProvider>
    );
}

export default App;
