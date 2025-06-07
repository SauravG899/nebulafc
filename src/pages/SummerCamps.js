import React from 'react';
import styled from 'styled-components';

const SummerCampsContainer = styled.div`
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

const SummerCamps = () => {
  return (
    <SummerCampsContainer>
      <Title>Summer Camps</Title>
      <Description>
        Join Nebula FC's exciting summer camps for a fun-filled experience of soccer skills, games, and friendships!
        Camps are available for various age groups and skill levels.
      </Description>

      <SectionsContainer>
        <SectionBox>
          <SectionTitle>Junior Skills Camp</SectionTitle>
          <SectionDescription>
            Designed for younger players focusing on fundamental skills and teamwork in a supportive environment.
            <ul>
              <li><b>Age Group:</b> 6-9 years</li>
              <li><b>Duration:</b> 1 week (Mon-Fri)</li>
              <li><b>Schedule:</b> 9:00 AM - 12:00 PM</li>
              <li><b>Focus:</b> Dribbling, Passing, Basic Game Rules</li>
            </ul>
          </SectionDescription>
        </SectionBox>

        <SectionBox>
          <SectionTitle>Youth Development Camp</SectionTitle>
          <SectionDescription>
            For intermediate players looking to enhance their technical abilities and understanding of game strategies.
            <ul>
              <li><b>Age Group:</b> 10-13 years</li>
              <li><b>Duration:</b> 1 week (Mon-Fri)</li>
              <li><b>Schedule:</b> 1:00 PM - 4:00 PM</li>
              <li><b>Focus:</b> Advanced Techniques, Positional Play, Small-sided Games</li>
            </ul>
          </SectionDescription>
        </SectionBox>

        <SectionBox>
          <SectionTitle>Advanced Training Camp</SectionTitle>
          <SectionDescription>
            Intensive camp for experienced players aiming to refine their skills and prepare for competitive play.
            <ul>
              <li><b>Age Group:</b> 14-17 years</li>
              <li><b>Duration:</b> 2 weeks (Mon-Fri)</li>
              <li><b>Schedule:</b> 9:00 AM - 3:00 PM</li>
              <li><b>Focus:</b> Tactical Awareness, Physical Conditioning, High-intensity Drills</li>
            </ul>
          </SectionDescription>
        </SectionBox>
      </SectionsContainer>
    </SummerCampsContainer>
  );
};

export default SummerCamps; 