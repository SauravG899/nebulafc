import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px - 40px); /* Adjust for Navbar and SecondaryBar height */
  padding: 20px;
  box-sizing: border-box;
`;

const RegisterTitle = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  font-size: 3rem;
  color: #a78bfa;
  margin-bottom: 10px;
`;

const LoginPrompt = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;

  a {
    color: #a78bfa;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterFormContainer = styled.div`
  background: #a78bfa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterFormTitle = styled.h2`
  font-family: 'Alfa Slab One', cursive;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
  margin-top: 20px;
  &:hover {
    background: #5a2e8c;
  }
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Dummy registration logic
    alert('Registration successful!');
    navigate('/login'); // Redirect to login page
  };

  return (
    <RegisterPageContainer>
      <RegisterTitle>Register</RegisterTitle>
      <LoginPrompt>
        Already have an account? <Link to="/login">Login here</Link>
      </LoginPrompt>
      <RegisterFormContainer>
        <RegisterFormTitle>REGISTER</RegisterFormTitle>
        <form onSubmit={handleRegister} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InputGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="confirm-password">Confirm Password:</Label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>
          <RegisterButton type="submit">REGISTER</RegisterButton>
        </form>
      </RegisterFormContainer>
    </RegisterPageContainer>
  );
};

export default Register; 