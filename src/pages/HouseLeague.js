import React from 'react';
import styled from 'styled-components';

const HouseLeagueContainer = styled.div`
  padding: 40px 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #5a2e8c; /* Purple color */
  margin-bottom: 20px;
  font-family: 'Alfa Slab One', cursive;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #5a2e8c; /* Purple color */
  margin-top: 30px;
  margin-bottom: 15px;
`;

const LeagueList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
`;

const LeagueItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  align-items: start;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const LeagueName = styled.span`
  font-weight: bold;
  font-size: 1.05rem;
  color: #333;
`;

const LeagueDetail = styled.span`
  font-size: 1rem;
  color: #555;
  text-align: left;
  word-break: break-word;
  white-space: normal;
`;

const PricingContainer = styled.div`
  background: #a78bfa;
  padding: 30px;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 80px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
`;

const PricingTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const HouseLeague = () => {
  const dummyLeagues = [
    {
      season: 'Summer 2025',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Practices: Mon/Wed<br />Games: Sat', schedule: 'Starts: June 1, Ends: Aug 15' },
        { name: 'U14 Boys/Girls', details: 'Practices: Tue/Thu<br />Games: Sun', schedule: 'Starts: June 1, Ends: Aug 15' },
        { name: 'U12 Boys/Girls', details: 'Practices: Mon/Wed<br />Games: Sat', schedule: 'Starts: June 1, Ends: Aug 15' },
      ],
    },
    {
      season: 'Fall 2025',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Practices: Tue/Thu<br />Games: Sun', schedule: 'Starts: Sep 1, Ends: Nov 15' },
        { name: 'U14 Boys/Girls', details: 'Practices: Mon/Wed<br />Games: Sat', schedule: 'Starts: Sep 1, Ends: Nov 15' },
        { name: 'U12 Boys/Girls', details: 'Practices: Tue/Thu<br />Games: Sun', schedule: 'Starts: Sep 1, Ends: Nov 15' },
      ],
    },
    {
      season: 'Winter 2026',
      leagues: [
        { name: 'U16 Boys/Girls', details: 'Practices: Fri<br />Games: Sun (Indoor)', schedule: 'Starts: Jan 10, Ends: Mar 20' },
        { name: 'U14 Boys/Girls', details: 'Practices: Sat<br />Games: Sun (Indoor)', schedule: 'Starts: Jan 10, Ends: Mar 20' },
        { name: 'U12 Boys/Girls', details: 'Practices: Fri<br />Games: Sat (Indoor)', schedule: 'Starts: Jan 10, Ends: Mar 20' },
      ],
    },
  ];

  return (
    <HouseLeagueContainer>
      <Title>House League</Title>
      
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '40px' }}>
        <div style={{ flex: 2 }}>
          <SectionTitle>Available Leagues</SectionTitle>
          {
            dummyLeagues.map((seasonData, index) => (
              <div key={index}>
                <SectionTitle>{seasonData.season}</SectionTitle>
                <LeagueList>
                  {seasonData.leagues.map((league, idx) => (
                    <LeagueItem key={idx}>
                      <LeagueName>{league.name}</LeagueName>
                      <LeagueDetail dangerouslySetInnerHTML={{ __html: league.details }} />
                      <LeagueDetail dangerouslySetInnerHTML={{ __html: league.schedule }} />
                    </LeagueItem>
                  ))}
                </LeagueList>
              </div>
            ))
          }
        </div>

        <div style={{ flex: 1 }}>
          <PricingContainer>
            <PricingTitle>Pricing</PricingTitle>
            <p>Annual Membership: $150</p>
            <p>League Fee: $250 - $350 (per season)</p>
            <p>Uniform Kit: $75 (one-time)</p>
            <p>Sibling Discount: 10% off league fee</p>
          </PricingContainer>
        </div>
      </div>
    </HouseLeagueContainer>
  );
};

export default HouseLeague; 