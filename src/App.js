import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCardsSection from './components/FeatureCardsSection';
import GlobalStyles from './styles/GlobalStyles';
import HouseLeague from './pages/HouseLeague';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureCardsSection />
              {/* Other landing page components will go here */}
            </>
          } />
          <Route path="/house-league" element={<HouseLeague />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
