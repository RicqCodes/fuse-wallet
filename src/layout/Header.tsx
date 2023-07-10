import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../components/Logo";
import { Button } from "../styles/element.styled";
import { device } from "../styles/utils.styled";

interface Nav {
  $open: boolean;
}

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const switchNavOff = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", switchNavOff);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", switchNavOff);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <Nav $open={openNav}>
        <ul>
          <li>
            <p>Network</p>
            {openNav && <IoIosArrowDown />}
          </li>
          <li>
            <p>Developers</p>
            {openNav && <IoIosArrowDown />}
          </li>
          <li>
            <p>Solutions</p>
            {openNav && <IoIosArrowDown />}
          </li>
          <li>
            <p>Tools</p>
            {openNav && <IoIosArrowDown />}
          </li>
        </ul>
      </Nav>
      <NavBarRight>
        <ButtonContainer>
          <FaTwitter />
          <Button $fontsize="1.4" $rounded>
            Build on Fuse
          </Button>
        </ButtonContainer>
        <NavButton onClick={() => setOpenNav((prev) => !prev)}>
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
  top: 0;
  position: sticky;
  background-color: rgb(var(--primary-color));
  z-index: 99;
  padding: 24px 0;
  position: relative;
`;

const Nav = styled.nav<Nav>`
  ul {
    display: flex;
    align-items: flex-start;

    li {
      font-size: 1.8rem;
      padding: 0.625rem 1.25rem;
      color: var(--accent-color);
    }
  }

  ${() => device.down("md")} {
    ${({ $open }) =>
      $open
        ? css`
            position: absolute;
            height: 23vh;
            top: 8rem;
            overflow: hidden;
            width: calc(100% + 48px);
            margin-left: -24px;
            background: var(--accent-color);
            transition: height 0.5s ease-in;
          `
        : css`
            position: absolute;
            height: 0;
            top: 8rem;
            overflow: hidden;
            width: calc(100% + 48px);
            margin-left: -24px;
            background: var(--accent-color);
            transition: height 0.5s ease-in;
          `}

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      transition: height 0.5s ease-in-out;

      li {
        color: var(--secondary-color);
        width: 100%;
        padding: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.0625rem solid rgba(151, 142, 161, 0.5);

        svg {
          color: var(--secondary-color);
        }
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--accent-color);

  svg {
    font-size: 32px;
  }

  ${() => device.down("sm")} {
    /* display: none; */
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
    background-color: var(--accent-color);
    border-radius: 1rem;
    padding-bottom: 0;
    padding-right: 0;
  }

  > div:nth-child(1) {
    width: 100%;
    transform-origin: 0 0;
    height: 0.2875rem;
  }

  > div:nth-child(2) {
    width: 100%;
    height: 0.2875rem;
    border-radius: 1rem;
    padding-bottom: 0;
    padding-right: 0;
  }

  > div:nth-child(3) {
    width: 100%;
    height: 0.2875rem;
    transform-origin: 0 100%;
  }
`;
