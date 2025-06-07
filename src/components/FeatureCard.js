import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
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
  text-decoration: none; /* Remove underline from Link */
  transition: all 0.3s ease-in-out; /* Add transition for smooth effect */
  cursor: pointer; /* Indicate it's clickable */

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.15); /* Enhanced shadow on hover */
    transform: translateY(-5px); /* Slight lift effect */
  }

  @media (max-width: 900px) {
    max-width: 100%;
    min-height: 220px;
    padding: 16px 4px 12px 4px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 18px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: #22223b;
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
`;

const FeatureCard = ({ title, image, to }) => {
  return (
    <CardContainer to={to}>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default FeatureCard; 