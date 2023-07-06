import React, { ReactElement } from "react";
import { styled } from "styled-components";

interface Props {
  children: ReactElement;
  withBorder?: boolean;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CardContainer>
        <div>{children}</div>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  max-width: 82.6rem;
  width: 100%;
  > div {
    background-color: var(--secondary-color);
    padding: 4rem 3.4rem 0 3.4rem;
    border-radius: var(--border-radius);

    @media screen and (max-width: 447px) {
      padding: 2.4rem;
    }
  }
`;
