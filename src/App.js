import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCardsSection from './components/FeatureCardsSection';
import GlobalStyles from './styles/GlobalStyles';
import HouseLeague from './pages/HouseLeague';
import Login from './pages/Login';
import GetInvolved from './pages/GetInvolved';
import ContactUs from './pages/ContactUs';
import Competitive from './pages/Competitive';
import SummerCamps from './pages/SummerCamps';
import Register from './pages/Register';
import Footer from './components/Footer';
import LearnMore from './pages/LearnMore';
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
          <Route path="/login" element={<Login />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/competitive" element={<Competitive />} />
          <Route path="/summer-camps" element={<SummerCamps />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
