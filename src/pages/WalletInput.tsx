import React from "react";
import Card from "../components/Card";
import { styled } from "styled-components";
import { Button } from "../styles/element.styled";

const WalletInput: React.FC = () => {
  return (
    <Container>
      <Card>
        <InnerContainer>
          <p>Add Wallet Address</p>
          <input type="text" placeholder="Enter or copy wallet address" />
          <Button $fontsize="1.6" $fullWidth>
            Continue
          </Button>
        </InnerContainer>
      </Card>
    </Container>
  );
};

export default WalletInput;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  p {
    color: var(--accent-color);
    font-size: 2.8rem;
    font-weight: 700;
    align-self: flex-start;
  }

  & input[type="text"] {
    width: 100%;
    outline: none;
    background-color: var(--primary-color);
    height: 4.8rem;
    border-radius: var(--border-radius);
    padding-left: 1.8rem;
    font-size: 1.8rem;

    &::placeholder {
      font-size: 1.6rem;
      color: #bfbfbf;
    }
  }

  button {
    font-size: 1.6rem;
    border-radius: var(--border-radius);
  }
`;
