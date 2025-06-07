import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #22223b; /* Dark background */
  color: #fff;
  padding: 40px 20px;
  margin-top: 50px; /* Space above the footer */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 0.95rem;
  border-top: 4px solid #a78bfa; /* Border matching navbar */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  color: #a78bfa; /* Purple for titles */
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  &:hover {
    color: #4ade80; /* Green hover effect */
    text-decoration: underline;
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 8px;
  line-height: 1.4;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s;
  &:hover {
    color: #4ade80;
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #ccc;
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <SectionTitle>Nebula FC</SectionTitle>
        <ContactInfo>123 Nebula St,<br />Galaxy City, Space 00000</ContactInfo>
        <ContactInfo>Email: info@nebulafc.com</ContactInfo>
        <ContactInfo>Phone: (123) 456-7890</ContactInfo>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Quick Links</SectionTitle>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/house-league">House League</FooterLink>
        <FooterLink to="/competitive">Competitive</FooterLink>
        <FooterLink to="/summer-camps">Summer Camps</FooterLink>
        <FooterLink to="/get-involved">Get Involved</FooterLink>
        <FooterLink to="/contact-us">Contact Us</FooterLink>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Follow Us</SectionTitle>
        <SocialIcons>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">F</SocialIcon> {/* Placeholder for Facebook */}
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">X</SocialIcon> {/* Placeholder for Twitter/X */}
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">I</SocialIcon> {/* Placeholder for Instagram */}
        </SocialIcons>
      </FooterSection>

      <Copyright>
        &copy; {new Date().getFullYear()} Nebula FC. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 