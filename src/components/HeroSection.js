import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  min-height: 380px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px 32px 16px;
  box-sizing: border-box;
  position: relative;
  border-bottom: 3px solid #7c3aed;

  @media (max-width: 768px) {
    min-height: 260px;
    padding: 32px 8px 24px 8px;
  }
`;

const HeroHeading = styled.h1`
  color: #a78bfa;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
  font-family: 'Alfa Slab One', cursive;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubheading = styled.p`
  color: #22223b;
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 32px 0;

  a {
    color: #22223b;
    text-decoration: underline;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #7c3aed;
    }
  }
`;

const RegisterButton = styled.button`
  background: #4ade80;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 18px 48px;
  font-size: 1.3rem;
  cursor: pointer;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #22c55e;
    transform: translateY(-2px) scale(1.03);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeading>Join Nebula FC</HeroHeading>
      <HeroSubheading>
        Why choose us?{' '}
        <a href="#learn-more">Learn more</a>
      </HeroSubheading>
      <RegisterButton>REGISTER NOW!!</RegisterButton>
    </HeroContainer>
  );
};

export default HeroSection; 