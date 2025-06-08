import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  background: #a78bfa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 700px; /* Adjust width to fit image layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const FormTitle = styled.h2`
  font-family: 'Alfa Slab One', cursive;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-family: 'Alfa Slab One', cursive;
  font-size: 1.5rem;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const InputGroup = styled.div`
  width: calc(33% - 15px); /* Approx one third for three columns */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* Two columns on smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Single column on very small screens */
  }
`;

const FullWidthInputGroup = styled(InputGroup)`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background: #fff;
`;

const Select = styled.select`
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background: #fff;
`;

const RegisterButton = styled.button`
  background: #7c3aed;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px 40px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 30px;
  &:hover {
    background: #5a2e8c;
  }
`;

const PlayerRegistrationForm = () => {
  const [playerData, setPlayerData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    address: '',
    league: '',
    position: '',
    jerseySize: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Player registration submitted successfully!');
    console.log('Player Data:', playerData);
    navigate('/'); // Redirect to home page after submission
  };

  return (
    <FormContainer>
      <FormTitle>PLAYER REGISTRATION</FormTitle>
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SectionTitle>Player Details</SectionTitle>
        <FormGroup>
          <InputGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <Input type="text" id="firstName" name="firstName" value={playerData.firstName} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input type="text" id="lastName" name="lastName" value={playerData.lastName} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="dob">Date of Birth:</Label>
            <Input type="date" id="dob" name="dob" value={playerData.dob} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="phoneNumber">Phone Number:</Label>
            <Input type="tel" id="phoneNumber" name="phoneNumber" value={playerData.phoneNumber} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" value={playerData.email} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="address">Address:</Label>
            <Input type="text" id="address" name="address" value={playerData.address} onChange={handleChange} required />
          </InputGroup>
        </FormGroup>

        <SectionTitle>Team Details</SectionTitle>
        <FormGroup>
          <FullWidthInputGroup>
            <Label htmlFor="league">League:</Label>
            <Select id="league" name="league" value={playerData.league} onChange={handleChange} required>
              <option value="">Select League</option>
              <option value="house-league">House League</option>
              <option value="competitive">Competitive</option>
              <option value="summer-camps">Summer Camps</option>
            </Select>
          </FullWidthInputGroup>
          <InputGroup>
            <Label htmlFor="position">Position:</Label>
            <Input type="text" id="position" name="position" value={playerData.position} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="jerseySize">Jersey Size:</Label>
            <Select id="jerseySize" name="jerseySize" value={playerData.jerseySize} onChange={handleChange} required>
              <option value="">Select Size</option>
              <option value="youth-s">Youth S</option>
              <option value="youth-m">Youth M</option>
              <option value="youth-l">Youth L</option>
              <option value="adult-s">Adult S</option>
              <option value="adult-m">Adult M</option>
              <option value="adult-l">Adult L</option>
              <option value="adult-xl">Adult XL</option>
            </Select>
          </InputGroup>
        </FormGroup>

        <RegisterButton type="submit">REGISTER</RegisterButton>
      </form>
    </FormContainer>
  );
};

export default PlayerRegistrationForm; 