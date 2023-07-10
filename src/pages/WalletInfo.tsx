import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { toast } from "react-hot-toast";

import { HiOutlineArrowDown } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  useLazyGetAllTokenByAddressQuery,
  useGetNativeTokenBalanceQuery,
  useLazyGetPriceForAllTokenQuery,
} from "../services/fuseApi";
import { addAddress } from "../services/slice";

import Card from "../components/Card";
import Modal from "../components/Modal";
import { Button } from "../styles/element.styled";
import { useAppSelector } from "../services/hooks";

import {
  calculateTokenPriceInUSD,
  calculateTotalBalance,
  createQueryString,
  isWalletAddress,
  parseBalance,
} from "../helper/utils";

import WalletDisplay from "./_molecules/WalletDisplay";
import { defaultToken } from "../helper/defaultToken";
import { device } from "../styles/utils.styled";

const WalletInfo: React.FC = () => {
  const { address } = useParams<{ address: string }>();

  // Throw Error if Wallet is not valid
  const isValid = isWalletAddress(address || "");
  if (!isValid)
    throw new Error(
      "Provided wallet address is not valid ERC20 wallet address"
    );

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); // State to handle the visibility of the modal
  const [displayedTokens, setDisplayedTokens] = useState(10); // Number of tokens to display initially
  const walletAddress = useAppSelector((app) => app.app.address);
  const [getAllTokenByAddress, { data: tokenList }] =
    useLazyGetAllTokenByAddressQuery({ pollingInterval: 10000 }); // Fetch user token and there balance every 10 seconds
  const [getPriceForAllTokenQuery, { data: tokenPrice }] =
    useLazyGetPriceForAllTokenQuery({ pollingInterval: 55000 }); // Get token price for available user token holdings if available
  const { data: nativeBalance } = useGetNativeTokenBalanceQuery(address || "");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const addToStateOnRefresh = async () => {
      try {
        await getAllTokenByAddress(address || "").unwrap();
        if (walletAddress === "") dispatch(addAddress(address || ""));
        const queryString = createQueryString(tokenList?.result, defaultToken);
        queryString !== "" && getPriceForAllTokenQuery(queryString);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toast.error(err.error);
      }
    };

    addToStateOnRefresh();
  }, [tokenList]);

  // Function to handle the "See More" button click
  const handleSeeMoreClick = () => {
    // Calculate the number of tokens to display after clicking "See More"
    const newDisplayedTokens = displayedTokens + 10;
    setDisplayedTokens(newDisplayedTokens);
  };

  const handleOffModal = () => {
    if (window.innerWidth <= 720) {
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
        setShowModal(false);
      }, 500);
    } else {
      setShowModal(false);
    }
  };

  return (
    <WalletContainer>
      <h2>Wallet</h2>
      <Card>
        <BalanceContainer>
          <Balance>
            <h3>Your Balance</h3>
            <p>
              $
              {calculateTotalBalance(
                defaultToken,
                tokenList,
                tokenPrice,
                nativeBalance
              )}
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
        <MainContainer>
          <Container>
            <InnerContainer>
              <h3>Your Coins</h3>
              <CoinContainer>
                {defaultToken.map((token) => (
                  <Link key={token.contractAddress} to={"#"}>
                    <Coin>
                      <Name>
                        <img src={token.image} alt={token.name} />
                        <Text>
                          <p>{token.name}</p>
                          <span>
                            $
                            {tokenPrice?.[token.contractAddress]?.usd?.toFixed(
                              3
                            ) || 0}
                          </span>
                        </Text>
                      </Name>
                      <Value>
                        <p>{parseBalance(nativeBalance?.result) || 0}</p>
                        <span>
                          $
                          {calculateTokenPriceInUSD(
                            tokenPrice?.[token.contractAddress]?.usd || 0,
                            parseBalance(nativeBalance?.result) || 0
                          )}
                        </span>
                      </Value>
                    </Coin>
                  </Link>
                ))}

                {tokenList?.result !== null &&
                  tokenList?.result.map((token) => (
                    <Link
                      key={token.contractAddress}
                      to={`/token/${token.contractAddress}?wallet=${address}`}
                    >
                      <Coin>
                        <Name>
                          {/* <img src={voltage} alt="Fuse Dollar" /> */}
                          <div>{token.symbol.slice(0, -1)}</div>
                          <Text>
                            <p>{token.name}</p>
                            <span>
                              $
                              {tokenPrice?.[
                                token.contractAddress
                              ]?.usd?.toFixed(3) || 0}
                            </span>
                          </Text>
                        </Name>
                        <Value>
                          <p>{parseBalance(token.balance) || 0}</p>
                          <span>
                            $
                            {calculateTokenPriceInUSD(
                              tokenPrice?.[token.contractAddress]?.usd || 0,
                              parseBalance(token.balance) || 0
                            )}
                          </span>
                        </Value>
                      </Coin>
                    </Link>
                  ))}
              </CoinContainer>
            </InnerContainer>
          </Container>
          <ShowMoreContainer>
            {(tokenList?.result?.length || 0) > displayedTokens && (
              // Render the "See More" button if there are more tokens to display
              <ShowMore>
                <p>Show More</p>
                <RiArrowDownSLine onClick={handleSeeMoreClick} />
              </ShowMore>
            )}
          </ShowMoreContainer>
        </MainContainer>
      </Card>
      {showModal && (
        <Modal handleOffModal={handleOffModal} transition={transition}>
          <WalletDisplay handleOffModal={handleOffModal} />
        </Modal>
      )}
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
  color: var(--accent-color);

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
  padding-bottom: 4rem;

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
    padding-bottom: 2rem;

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
      color: var(--increase-color);
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 447px) {
    align-self: flex-start;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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

  a:nth-child(odd) {
    background-color: rgb(var(--primary-color));
    border-radius: var(--border-radius);
  }
`;

const Coin = styled.div`
  width: 100%;
  padding: 1.1rem 2rem;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: space-between; */
  align-items: center;
  gap: 2rem;

  ${() => device.down("xxs")} {
    grid-template-columns: 1fr;
    /* flex-direction: column; */
  }
`;

const Name = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;

  p {
    font-size: 1.8rem;
    font-weight: 600;
  }

  > div:first-child {
    height: 4.2rem;
    width: 4.2rem;
    border-radius: 50%;
    background-color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
    position: relative;
    color: var(--secondary-color);
  }

  img,
  svg {
    height: 4.2rem;
    width: 4.2rem;
  }

  ${() => device.down("xxs")} {
    width: 100%;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;

  p {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
  }

  ${() => device.down("xxs")} {
    display: flex;
    width: 100%;
    text-align: end;
  }
`;

const ShowMoreContainer = styled.div`
  padding-bottom: 2rem;
`;
const ShowMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  gap: 2px;
  cursor: pointer;
  border-top: 1px solid rgb(var(--primary-color));
  padding: 2rem;
`;
