import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #a78bfa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 72px;
  box-sizing: border-box;
  border-bottom: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  height: 56px;
  width: auto;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
    margin: 0 8px;
  }
`;

const NavLink = styled.li`
  font-size: 1.1rem;
  font-weight: 500;
  color: #22223b;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #7c3aed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RegisterButton = styled.button`
  background: #4ade80;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #22c55e;
  }
`;

const LoginButton = styled.button`
  background: #a78bfa;
  color: #22223b;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #7c3aed;
    color: #fff;
  }
`;

const SecondaryBar = styled.div`
  width: 100%;
  background: rgba(167, 139, 250, 0.7);
  border-bottom: 4px solid #22223b;
  backdrop-filter: blur(4px);
`;

const SecondaryBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  gap: 40px;
  padding-right: 40px;

  @media (max-width: 1200px) {
    padding-right: 24px;
  }
  @media (max-width: 600px) {
    gap: 16px;
    height: 36px;
    font-size: 0.95rem;
    padding-right: 12px;
  }
`;

const SecondaryLink = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #22223b;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <LeftSection>
          <LogoWrapper>
            <Logo src={logo} alt="Nebula FC Logo" />
          </LogoWrapper>
          <NavLinks>
            <NavLink>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                HOME
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/house-league" style={{ textDecoration: 'none', color: 'inherit' }}>
                HOUSE LEAGUE
              </Link>
            </NavLink>
            <NavLink>COMPETITIVE</NavLink>
            <NavLink>SUMMER CAMPS</NavLink>
          </NavLinks>
        </LeftSection>
        <ButtonGroup>
          <RegisterButton>REGISTER</RegisterButton>
          <LoginButton>LOGIN</LoginButton>
        </ButtonGroup>
      </NavbarContainer>
      <SecondaryBar>
        <SecondaryBarContent>
          <SecondaryLink>GET INVOLVED</SecondaryLink>
          <SecondaryLink>CONTACT US</SecondaryLink>
        </SecondaryBarContent>
      </SecondaryBar>
    </div>
  );
};

export default Navbar; 