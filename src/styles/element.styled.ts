import { styled, css } from "styled-components";

interface Button {
  $primary?: boolean;
  $fullWidth?: boolean;
  $rounded?: boolean;
  $fontsize: string;
}

export const Button = styled.button<Button>`
  /* This renders the buttons above... Edit me! */
  background: var(--accent-color);
  color: var(--secondary-color);
  font-size: ${(props) => `${props.$fontsize}rem`};
  font-weight: 500;
  border-radius: 3px;
  display: inline-block;
  padding: 1.2rem 1.4rem;
  height: 4.8rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$rounded &&
    css`
      width: 100%;
      border-radius: 10rem;
    `}
`;
