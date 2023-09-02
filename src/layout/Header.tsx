import React, { useEffect } from "react";
import { css, styled } from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../components/Logo";
import { Button } from "../styles/element.styled";
import { device } from "../styles/utils.styled";
import useToggle from "../hooks/useToggle";

interface Nav {
  $open: boolean;
}

const Header: React.FC = () => {
  const { toggle, toggleRef, toggledElementRef, handleToggle } = useToggle({
    eventType: "click",
  });

  useEffect(() => {
    const switchNavOffOnBigScreen = () => {
      if (window.innerWidth >= 960) {
        toggle && handleToggle();
      }
    };

    // Add event listeners
    window.addEventListener("resize", switchNavOffOnBigScreen);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("resize", switchNavOffOnBigScreen);
    };
  }, []);
  return (
    <HeaderContainer>
      <Logo />
      <Nav $open={toggle} ref={toggledElementRef}>
        <ul>
          <li>
            <p>Network</p>
            {toggle && <IoIosArrowDown />}
          </li>
          <li>
            <p>Developers</p>
            {toggle && <IoIosArrowDown />}
          </li>
          <li>
            <p>Solutions</p>
            {toggle && <IoIosArrowDown />}
          </li>
          <li>
            <p>Tools</p>
            {toggle && <IoIosArrowDown />}
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
        <NavButton
          ref={toggleRef as React.RefObject<HTMLDivElement>}
          onClick={handleToggle}
        >
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
            height: 220px;
            top: 9rem;
            overflow: hidden;
            width: calc(100% + 45.4px);
            margin-left: -23px;
            background: var(--accent-color);
            box-shadow: var(--box-shadow);
            transition: height 0.3s ease-in;
          `
        : css`
            position: absolute;
            height: 0;
            top: 9rem;
            overflow: hidden;
            width: calc(100% + 45.4px);
            margin-left: -23px;
            background: var(--accent-color);
            transition: height 0.3s ease-in;
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
