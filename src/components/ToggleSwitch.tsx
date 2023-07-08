import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  toggled: boolean;
  themeToggler: () => void;
}

interface ToggleBox {
  $state?: boolean;
}

interface Switcher extends ToggleBox {
  $disabled?: string;
}

export const ToggleSwitch: React.FC<Props> = ({ toggled, themeToggler }) => {
  const [toggle, setToggle] = useState(toggled);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    themeToggler();
  };

  useEffect(() => {
    setToggle(toggled);
  }, [toggled]);

  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleBox $state={toggle}>
        <Switcher $state={toggle}></Switcher>
      </ToggleBox>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  width: 32px;
  height: 16px;
`;

const ToggleBox = styled.div<ToggleBox>`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  padding: 2px;
  margin: 0;
  background: ${({ $state }) =>
    $state ? "var(--secondary-color)" : "var(--primary-color)"};
`;

const Switcher = styled.div<Switcher>`
  ${({ $state }) => {
    switch ($state) {
      case true:
        return css`
          transform: translateX(130%);
        `;
      case false:
      default:
        return css`
          transform: translateX(0);
        `;
    }
  }}

  background: ${({ $state }) => ($state === false ? "grey" : "white")};

  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 0;
`;
