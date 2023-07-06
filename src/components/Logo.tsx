import React from "react";
import logo from ".././assets/logo.svg";
import { styled } from "styled-components";

const Logo: React.FC = () => {
  return (
    <>
      <LogoContainer>
        <img src={logo} alt="Fuse Logo" />
      </LogoContainer>
    </>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 10.6rem;
  height: 3.3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
