import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "../components/Card";
import { Button } from "../styles/element.styled";

import { HiOutlineArrowDown } from "react-icons/hi";
import fusd from "../assets/fUSD.png";
import fuse from "../assets/sFuse.png";
import voltage from "../assets/volt.png";
import Modal from "../components/Modal";

const WalletInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <WalletContainer>
      <h2>Wallet</h2>
      <Card>
        <BalanceContainer>
          <Balance>
            <h3>Your Balance</h3>
            <p>
              $60
              <span> +0%</span>
            </p>
          </Balance>
          <Button onClick={() => setShowModal(true)} $fontsize="1.6">
            <div>
              <HiOutlineArrowDown />
              <p>Receive</p>
            </div>
          </Button>
        </BalanceContainer>
      </Card>
      <Card>
        <>
          <Container>
            <InnerContainer>
              <h3>Your Coins</h3>
              <CoinContainer>
                <Coin>
                  <Name>
                    <img src={fusd} alt="Fuse Dollar" />
                    <p>Fuse Dollar</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={fuse} alt="Fuse Dollar" />
                    <p>Fuse</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
                <Coin>
                  <Name>
                    <img src={voltage} alt="Fuse Dollar" />
                    <p>Voltage</p>
                  </Name>
                  <Value>
                    <p>$35</p>
                  </Value>
                </Coin>
              </CoinContainer>
            </InnerContainer>
          </Container>
          <ShowMore>Show More</ShowMore>
        </>
      </Card>
      {showModal && <Modal setShowModal={setShowModal} />}
    </WalletContainer>
  );
};

export default WalletInfo;

const WalletContainer = styled.div`
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

const BalanceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 1.6rem 4.7rem;

    > div {
      display: flex;
      align-items: center;
      gap: 4px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 447px) {
    flex-direction: column;
    gap: 2.4rem;

    button {
      width: 100%;
    }
  }
`;

const Balance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 2.8rem;
    font-weight: 700;

    span {
      color: #1fe000;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 447px) {
    align-self: flex-start;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const CoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Coin = styled.div`
  width: 100%;
  padding: 1.1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
  }
`;

const Name = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    font-size: 1.8rem;
    font-weight: 600;
  }

  img,
  svg {
    height: 4.2rem;
    width: 4.2rem;
  }
`;
const Value = styled.div`
  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ShowMore = styled.div`
  border-top: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`;
