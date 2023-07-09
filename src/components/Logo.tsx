import React from "react";
import { styled } from "styled-components";
import { useAppSelector } from "../services/hooks";

const Logo: React.FC = () => {
  const theme = useAppSelector((app) => app.app.themeMode);
  console.log("logo", theme);
  return (
    <>
      <LogoContainer>
        <img
          className={theme === "dark" ? "invert" : ""}
          src={"https://asset.brandfetch.io/idF0ahzOW4/id5Z-xCDgM.svg"}
          alt="Fuse Logo"
        />
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

  .invert {
    filter: invert(100%);
  }
`;
