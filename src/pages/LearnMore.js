import React from 'react';
import styled from 'styled-components';

const LearnMorePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: calc(100vh - 72px - 40px); /* Adjust for Navbar and SecondaryBar height */
  box-sizing: border-box;
`;

const LearnMoreTitle = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  font-size: 3rem;
  color: #a78bfa;
  margin-bottom: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 900px;
  color: #333;
  line-height: 1.6;

  h2 {
    font-family: 'Alfa Slab One', cursive;
    font-size: 2rem;
    color: #a78bfa;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  h3 {
    font-family: 'Alfa Slab One', cursive;
    font-size: 1.5rem;
    color: #7c3aed;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const LearnMore = () => {
  return (
    <LearnMorePageContainer>
      <LearnMoreTitle>Learn More About Nebula FC</LearnMoreTitle>
      <ContentWrapper>
        <p>
          At Nebula FC, we are dedicated to fostering a love for soccer in players of all ages and skill levels. 
          Our programs are designed to provide a fun, safe, and challenging environment where players can develop 
          their technical skills, tactical understanding, and physical fitness. We emphasize teamwork, sportsmanship, 
          and personal growth, ensuring every player reaches their full potential both on and off the field.
        </p>

        <h2>Our Philosophy</h2>
        <p>
          Our coaching philosophy revolves around a player-centered approach. We believe in nurturing not just skilled athletes, 
          but well-rounded individuals. We focus on:
        </p>
        <ul>
          <li><strong>Player-Centered Approach:</strong> Tailoring training to individual needs and maximizing personal development.</li>
          <li><strong>Experienced and Certified Coaches:</strong> Our coaching staff brings years of experience and holds relevant certifications, ensuring high-quality instruction.</li>
          <li><strong>Community Focus:</strong> Building a strong, supportive, and inclusive community where every player feels valued.</li>
          <li><strong>Holistic Development:</strong> Promoting physical, mental, and social growth through soccer.</li>
          <li><strong>Fun and Engagement:</strong> Ensuring that learning and playing are always enjoyable experiences.</li>
        </ul>

        <h2>Our Programs</h2>
        <p>
          We offer a diverse range of programs to suit various age groups and skill levels. Whether your child is just starting out 
          or looking to compete at a higher level, Nebula FC has a program for them:
        </p>
        <h3>House League</h3>
        <p>
          Our House League is perfect for beginners and those looking for a recreational soccer experience. It focuses on 
          fundamental skill development, teamwork, and having fun in a low-pressure environment. Matches are played locally 
          with a focus on participation and enjoyment.
        </p>
        <h3>Competitive Program</h3>
        <p>
          For players seeking a more challenging and intensive soccer experience, our Competitive Program offers advanced 
          training, tactical instruction, and opportunities to compete against other clubs. This program is designed to 
          develop elite skills and prepare players for higher levels of competition.
        </p>
        <h3>Summer Camps</h3>
        <p>
          Our Summer Camps provide an excellent opportunity for players to hone their skills during the off-season. 
          These camps feature intensive training sessions, fun drills, and friendly competitions, all designed to 
          improve individual technique and game understanding.
        </p>

        <h2>Join the Nebula FC Family!</h2>
        <p>
          We invite you to explore our programs and find the perfect fit for your child. Join Nebula FC today and become a part 
          of a thriving soccer community where passion, dedication, and sportsmanship thrive. We look forward to welcoming you!
        </p>
      </ContentWrapper>
    </LearnMorePageContainer>
  );
};

export default LearnMore; 