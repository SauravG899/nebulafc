import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import soccerFieldAerial from '../assets/soccer_field_aerial.jpeg';

const GetInvolvedContainer = styled.div`
  padding: 40px 80px;
  max-width: 1400px;
  margin: 0 auto;
  /* background: #e5e5e5; */ /* Removed to ensure consistent background */
  min-height: calc(100vh - 72px - 40px); /* Adjust for Navbar and SecondaryBar height */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px; /* Add some border radius */
  overflow: hidden; /* Ensure content doesn't overflow rounded corners */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px; /* Set a fixed height for the image */
  background: url(${soccerFieldAerial}) no-repeat center center / cover;
  margin-bottom: 30px;
  border-radius: 10px; /* Match container border radius */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #a78bfa;
  margin-bottom: 10px;
  font-family: 'Alfa Slab One', cursive;
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

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionBox = styled.div`
  background: ${(props) => props.background};
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
  color: #5a2e8c; /* Purple color */
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

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const DetailItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  align-items: start;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  &:last-child {
    border-bottom: none;
  }
`;

const DetailName = styled.span`
  font-weight: bold;
  font-size: 0.95rem;
  color: #333;
`;

const DetailText = styled.span`
  font-size: 0.9rem;
  color: #555;
  text-align: left;
`;

const FooterText = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-style: italic;
  text-align: center;
  margin-top: 50px;

  a {
    color: #a78bfa;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const GetInvolved = () => {
  const coachingPositions = [
    {
      season: 'Winter 2025',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Lead Coach', schedule: 'Weekend Games' },
        { name: 'U14 Boys/Girls', details: 'Assistant Coach', schedule: 'Weekday Practices' },
        { name: 'U12 Boys/Girls', details: 'Team Manager', schedule: 'Flexible Hours' },
      ],
    },
    {
      season: 'Summer 2025',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Lead Coach', schedule: 'Weekday Evenings' },
        { name: 'U14 Boys/Girls', details: 'Assistant Coach', schedule: 'Weekend Mornings' },
        { name: 'U12 Boys/Girls', details: 'Team Manager', schedule: 'Ad-hoc' },
      ],
    },
    {
      season: 'Fall 2025',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Lead Coach', schedule: 'Weekend Afternoons' },
        { name: 'U14 Boys/Girls', details: 'Assistant Coach', schedule: 'Weekday Nights' },
        { name: 'U12 Boys/Girls', details: 'Team Manager', schedule: 'Game Days' },
      ],
    },
  ];

  return (
    <GetInvolvedContainer>
      <Title>Get Involved</Title>
      <Description>
        Nebula FC is always looking for passionate individuals to join our team!
        Whether you're interested in coaching, refereeing, or general volunteering,
        your contributions help us create a vibrant and supportive community for our players.
      </Description>
      <ImageWrapper />

      <SectionsContainer>
        <SectionBox background="#b3e0ff"> {/* Light Blue */}
          <SectionTitle>Coaching Positions</SectionTitle>
          <SectionDescription>Join our coaching staff and help develop young talent. We're looking for experienced coaches and enthusiastic assistants.</SectionDescription>
          {coachingPositions.map((seasonData, index) => (
            <div key={index} style={{ width: '100%' }}>
              <h3 style={{ color: '#5a2e8c', marginBottom: '10px', fontSize: '1.2rem' }}>{seasonData.season}</h3>
              <DetailsList>
                {seasonData.leagues.map((position, idx) => (
                  <DetailItem key={idx}>
                    <DetailName>{position.name}</DetailName>
                    <DetailText>{position.details}</DetailText>
                    <DetailText>{position.schedule}</DetailText>
                  </DetailItem>
                ))}
              </DetailsList>
            </div>
          ))}
        </SectionBox>

        <SectionBox background="#cccccc"> {/* Light Grey */}
          <SectionTitle>Referee</SectionTitle>
          <SectionDescription>Become a certified referee and ensure fair play on the field. Opportunities available for all skill levels.</SectionDescription>
          <DetailsList>
            <DetailItem>
              <DetailName>Youth Leagues</DetailName>
              <DetailText>Requires basic certification</DetailText>
              <DetailText>Weekend availability</DetailText>
            </DetailItem>
            <DetailItem>
              <DetailName>Adult Leagues</DetailName>
              <DetailText>Advanced certification preferred</DetailText>
              <DetailText>Weekday/Weekend</DetailText>
            </DetailItem>
          </DetailsList>
        </SectionBox>

        <SectionBox background="#c8e6c9"> {/* Light Green */}
          <SectionTitle>Volunteering</SectionTitle>
          <SectionDescription>Support Nebula FC in various capacities, from event organization to administrative tasks. Every little bit helps!</SectionDescription>
          <DetailsList>
            <DetailItem>
              <DetailName>Event Support</DetailName>
              <DetailText>Help with game day setup/teardown</DetailText>
              <DetailText>Ad-hoc events</DetailText>
            </DetailItem>
            <DetailItem>
              <DetailName>Administrative</DetailName>
              <DetailText>Office tasks, data entry</DetailText>
              <DetailText>Flexible hours</DetailText>
            </DetailItem>
            <DetailItem>
              <DetailName>Field Maintenance</DetailName>
              <DetailText>Assist with field upkeep</DetailText>
              <DetailText>As needed</DetailText>
            </DetailItem>
          </DetailsList>
        </SectionBox>
      </SectionsContainer>
      <FooterText>
        Interested? Send your resume and desired team through our <Link to="/contact-us">"Contact Us"</Link> page
      </FooterText>
    </GetInvolvedContainer>
  );
};

export default GetInvolved; 