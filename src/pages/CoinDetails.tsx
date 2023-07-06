import React from "react";
import { styled } from "styled-components";
import Card from "../components/Card";

const CoinDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <h2>Details</h2>
      <Card>
        <InnerContainer>
          <h3>Fuse</h3>
          <InnerDetail>
            <Detail>
              <h4>Symbol</h4>
              <p>WFUSE</p>
            </Detail>
            <Detail>
              <h4>Name</h4>
              <p>Wrapped Fuse</p>
            </Detail>
            <Detail>
              <h4>Total Supply</h4>
              <p>10,000,000</p>
            </Detail>
            <Detail>
              <h4>Decimals</h4>
              <p>18</p>
            </Detail>
          </InnerDetail>
        </InnerContainer>
      </Card>
    </DetailsContainer>
  );
};

export default CoinDetails;

const DetailsContainer = styled.div`
  margin: 6.4rem auto;
  max-width: 82.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-items: center;

  h2 {
    align-self: flex-start;
    font-size: 2.8rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const InnerDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Detail = styled.div`
  width: 100%;
  height: 6.4rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }

  &:nth-child(odd) {
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 447px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 2.2rem;
  }
`;
