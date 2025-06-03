import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';

// SVG icons as React components
const SoccerBallIcon = (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="26" stroke="#7c3aed" strokeWidth="4" fill="#fff" />
    <polygon points="28,16 36,22 33,32 23,32 20,22" fill="#7c3aed" />
    <circle cx="28" cy="28" r="6" fill="#a78bfa" />
  </svg>
);

const TrophyIcon = (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="40" width="20" height="8" rx="2" fill="#a78bfa" />
    <rect x="22" y="36" width="12" height="6" rx="2" fill="#7c3aed" />
    <ellipse cx="28" cy="22" rx="12" ry="14" fill="#fff" stroke="#7c3aed" strokeWidth="4" />
    <path d="M16 22c-4 0-4 8 0 8" stroke="#a78bfa" strokeWidth="2" fill="none" />
    <path d="M40 22c4 0 4 8 0 8" stroke="#a78bfa" strokeWidth="2" fill="none" />
  </svg>
);

const SunIcon = (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="12" fill="#fde68a" stroke="#fbbf24" strokeWidth="4" />
    <g stroke="#fbbf24" strokeWidth="3">
      <line x1="28" y1="4" x2="28" y2="16" />
      <line x1="28" y1="40" x2="28" y2="52" />
      <line x1="4" y1="28" x2="16" y2="28" />
      <line x1="40" y1="28" x2="52" y2="28" />
      <line x1="12.2" y1="12.2" x2="19.8" y2="19.8" />
      <line x1="36.2" y1="36.2" x2="43.8" y2="43.8" />
      <line x1="12.2" y1="43.8" x2="19.8" y2="36.2" />
      <line x1="36.2" y1="19.8" x2="43.8" y2="12.2" />
    </g>
  </svg>
);

const SectionContainer = styled.section`
  width: 100%;
  background: #fff;
  padding: 32px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  margin-top: 8px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`;

const FeatureCardsSection = () => {
  return (
    <SectionContainer>
      <CardsRow>
        <FeatureCard title="HOUSE LEAGUE" icon={SoccerBallIcon} />
        <FeatureCard title="COMPETITIVE" icon={TrophyIcon} />
        <FeatureCard title="SUMMER CAMPS" icon={SunIcon} />
      </CardsRow>
    </SectionContainer>
  );
};

export default FeatureCardsSection; 