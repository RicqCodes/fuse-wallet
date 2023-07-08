import React from "react";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { useDarkMode } from "../hooks/useTheme";

const Footer: React.FC = () => {
  const { theme, themeToggler } = useDarkMode();

  return (
    <div>
      Footer
      <ToggleSwitch
        themeToggler={themeToggler}
        toggled={theme === "light" ? false : true}
      />
    </div>
  );
};

export default Footer;
