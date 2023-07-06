import React from "react";
import { styled, css } from "styled-components";
import { FaTwitter } from "react-icons/fa";

import Logo from "../components/Logo";
import { Button } from "../styles/element.styled";
import { device } from "../styles/utils.styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <ul>
          <li>Network</li>
          <li>Developers</li>
          <li>Solutions</li>
          <li>Tools</li>
        </ul>
      </Nav>
      <NavBarRight>
        <ButtonContainer>
          <FaTwitter />
          <Button $fontsize="1.4" $rounded>
            Build on Fuse
          </Button>
        </ButtonContainer>
        <NavButton>
          <div></div>
          <div></div>
          <div></div>
        </NavButton>
      </NavBarRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: flex-start;

    li {
      font-size: 1.8rem;
      padding: 0.625rem 1.25rem;
    }
  }

  ${() => device.down("md")} {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    font-size: 32px;
  }

  ${() => device.down("sm")} {
    display: none;
  }
`;

const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavButton = styled.div`
  display: none;
  width: 2.2rem;
  height: 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  ${() => device.down("md")} {
    display: flex;
  }

  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3) {
    width: 100%;
    height: 0.1875rem;
    background-color: #1a1a1a;
    border-radius: 1rem;
    padding-bottom: 0;
    padding-right: 0;
  }

  > div:nth-child(1) {
    width: 100%;
    transform-origin: 0 0;
    background-color: #1a1a1a;
    height: 0.2875rem;
  }

  > div:nth-child(2) {
    width: 100%;
    height: 0.2875rem;
    background-color: #1a1a1a;
    border-radius: 1rem;
    padding-bottom: 0;
    padding-right: 0;
  }

  > div:nth-child(3) {
    width: 100%;
    background-color: #1a1a1a;
    height: 0.2875rem;
    transform-origin: 0 100%;
  }
`;
