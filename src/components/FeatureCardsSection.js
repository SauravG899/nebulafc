import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import playersBehindNet from '../assets/players_behind_net.jpeg';
import playersAction from '../assets/players_action.jpeg';

// SVG icons as React components
// Removed SVG icons as they are no longer used

const SectionContainer = styled.section`
  width: 100%;
  /* background: #fff; */ /* Removed to ensure consistent background */
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
        <FeatureCard title="HOUSE LEAGUE" image={playersBehindNet} to="/house-league" />
        <FeatureCard title="COMPETITIVE" image={playersAction} to="/competitive" />
        <FeatureCard title="SUMMER CAMPS" image={playersBehindNet} to="/summer-camps" /> {/* Reusing an image for now */}
      </CardsRow>
    </SectionContainer>
  );
};

export default FeatureCardsSection; 