import React from 'react';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
  padding: 40px;
  max-width: 1200px; /* Adjusted max-width to accommodate two columns */
  margin: 0 auto;
  /* text-align: center; */ /* Removed this for flex layout */
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #a78bfa;
  margin-bottom: 10px;
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
`;

const DescriptionParagraph = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: left;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  /* background: #e0e0e0; */ /* Removed to ensure consistent background */
  padding: 30px;
  border-radius: 10px;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #5a2e8c;
  margin-bottom: 15px;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #5a2e8c;
  margin-bottom: 10px;
`;

const ContactDetailName = styled.span`
  font-weight: bold;
  font-size: 0.95rem;
  color: #333;
`;

const ContactDetailText = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const ContactDetailItem = styled.p`
  font-size: 1rem;
  color: #4a4e69;
  margin-bottom: 5px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: #22223b;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.p`
  font-weight: bold;
  color: #5a2e8c;
  margin-bottom: 5px;
`;

const FAQAnswer = styled.p`
  color: #555;
  line-height: 1.5;
`;

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Title>Contact Us</Title>
      <DescriptionParagraph>
        We'd love to hear from you! Please reach out to us with any questions, feedback, or inquiries.
      </DescriptionParagraph>

      <ContentWrapper>
        <LeftColumn>
          <SectionTitle>Contact</SectionTitle>
          <Subtitle>Winter 2025</Subtitle>
          <ContactDetailItem><ContactDetailName>Phone Number:</ContactDetailName> <ContactDetailText>(123) 456-7890 <small>ext 123</small></ContactDetailText></ContactDetailItem>
          <ContactDetailItem><ContactDetailName>Email:</ContactDetailName> <ContactDetailText>info@nebulafc.com</ContactDetailText></ContactDetailItem>
          <ContactDetailItem><ContactDetailName>Office Address:</ContactDetailName> <ContactDetailText>123 Nebula St, Galaxy City, Space 00000</ContactDetailText></ContactDetailItem>

          <SectionTitle>Hours of Operation</SectionTitle>
          <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Opening</th>
                  <th>Closing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 AM</td>
                  <td>2:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </StyledTable>
          </TableContainer>
        </LeftColumn>

        <RightColumn>
          <SectionTitle>Commonly Asked Questions...</SectionTitle>
          <FAQItem>
            <FAQQuestion>What programs does Nebula FC offer?</FAQQuestion>
            <FAQAnswer>Nebula FC offers a variety of programs including House League, Competitive Teams, and Summer Camps for different age groups and skill levels.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>How can I register for a program?</FAQQuestion>
            <FAQAnswer>You can register for our programs directly through our website by clicking on the 'REGISTER' button in the top navigation bar. Select the program you are interested in and follow the steps.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>What is the difference between House League and Competitive?</FAQQuestion>
            <FAQAnswer>House League is designed for recreational play, focusing on fun and skill development in a less competitive environment. Competitive teams offer more intensive training and participate in higher-level leagues and tournaments.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Are there opportunities for volunteers?</FAQQuestion>
            <FAQAnswer>Yes, we welcome volunteers! Please visit our 'GET INVOLVED' page for more information on how you can contribute as a coach, team manager, or in other capacities.</FAQAnswer>
          </FAQItem>
        </RightColumn>
      </ContentWrapper>
    </ContactUsContainer>
  );
};

export default ContactUs; 