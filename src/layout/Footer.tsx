import React from "react";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useDarkMode } from "../hooks/useTheme";
import { styled } from "styled-components";

const Footer: React.FC = () => {
  const { theme, themeToggler } = useDarkMode();
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <small>©{year} Fuse. All Rights Reserved</small>
      <ToggleSwitch
        themeToggler={themeToggler}
        toggled={theme === "light" ? false : true}
      />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 4.8rem 0 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  small {
    font-size: 1.4rem;
    color: var(--accent-color);
  }
`;
