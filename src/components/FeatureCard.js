import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #f8fafc;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px 16px 12px;
  width: 100%;
  max-width: 340px;
  min-height: 280px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 900px) {
    max-width: 100%;
    min-height: 220px;
    padding: 16px 4px 12px 4px;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 160px;
  background: #e5e5e5;
  border-radius: 8px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #bdbdbd;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: #22223b;
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
`;

const FeatureCard = ({ title, icon }) => {
  return (
    <CardContainer>
      <PlaceholderImage>
        {icon}
      </PlaceholderImage>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default FeatureCard; 