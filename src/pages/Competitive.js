import React from 'react';
import styled from 'styled-components';

const CompetitiveContainer = styled.div`
  padding: 40px 80px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 72px - 40px); /* Adjust for Navbar and SecondaryBar height */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #a78bfa;
  margin-bottom: 10px;
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionBox = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    width: 90%;
    max-width: 600px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #5a2e8c;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 15px;
  text-align: left;
`;

const Competitive = () => {
  return (
    <CompetitiveContainer>
      <Title>Competitive Programs</Title>
      <Description>
        Nebula FC offers competitive soccer programs for dedicated players looking to elevate their game.
        Our teams focus on advanced skill development, tactical understanding, and high-level competition.
      </Description>

      <SectionsContainer>
        <SectionBox>
          <SectionTitle>U18 Elite Team</SectionTitle>
          <SectionDescription>
            Our premier team competes in the regional elite league. Intensive training sessions and exposure to scouts.
            <ul>
              <li><b>Age Group:</b> U18 Boys & Girls</li>
              <li><b>Training:</b> 3x per week</li>
              <li><b>Games:</b> Weekends (League & Tournaments)</li>
              <li><b>Season:</b> Year-round</li>
            </ul>
          </SectionDescription>
        </SectionBox>

        <SectionBox>
          <SectionTitle>U16 Development Squad</SectionTitle>
          <SectionDescription>
            Focus on transitioning players from recreational to competitive play. Building foundational competitive skills.
            <ul>
              <li><b>Age Group:</b> U16 Boys & Girls</li>
              <li><b>Training:</b> 2x per week</li>
              <li><b>Games:</b> Weekends (Local League)</li>
              <li><b>Season:</b> Fall & Spring</li>
            </ul>
          </SectionDescription>
        </SectionBox>

        <SectionBox>
          <SectionTitle>Tryouts Information</SectionTitle>
          <SectionDescription>
            Interested players must attend tryouts for team placement. Please register online for tryout dates and times.
            <ul>
              <li><b>Dates:</b> March 15-20, 2025</li>
              <li><b>Location:</b> Nebula FC Training Grounds</li>
              <li><b>Requirements:</b> Pre-registration required</li>
            </ul>
          </SectionDescription>
        </SectionBox>
      </SectionsContainer>
    </CompetitiveContainer>
  );
};

export default Competitive; 