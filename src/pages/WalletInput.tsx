import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isAddress } from "ethers";
import { styled } from "styled-components";

import { Button, Loader } from "../styles/element.styled";
import Card from "../components/Card";

import { addAddress } from "../services/slice";
import { toast } from "react-hot-toast";
import { useLazyGetAllTokenByAddressQuery } from "../services/fuseApi";
import { useNavigate } from "react-router-dom";

const WalletInput: React.FC = () => {
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  const [getAllTokenByAddress, { isLoading: isFetchingToken }] =
    useLazyGetAllTokenByAddressQuery();

  const handleWalletAdd = async () => {
    // Check to see if user input is an empty string
    if (walletAddress === "") {
      toast("Wallet can not be empty");
      return;
    }

    // Check to see if user input is a valid wallet address
    const isValidAddress = isAddress(walletAddress);

    // Return intutitive text if wallet is not valid
    if (!isValidAddress) {
      toast.error("Not a valid wallet address");
      return;
    }

    // Dispatch the user inputed wallet to the app state
    dispatch(addAddress(walletAddress));

    // Fetch All Token
    try {
      await getAllTokenByAddress(walletAddress, true).unwrap();
      navigate(`/wallet/${walletAddress}`);
    } catch (err) {
      console.error("rejected", err);
      toast.error("An error occured!");
    }
  };

  return (
    <Container>
      <Card>
        <InnerContainer>
          <p>Add Wallet Address</p>
          <input
            type="text"
            placeholder="Enter or copy wallet address"
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <Button
            type="button"
            $fontsize="1.6"
            $fullWidth
            onClick={handleWalletAdd}
            disabled={isFetchingToken}
          >
            {isFetchingToken ? (
              <div>
                wait while we fetch
                <Loader />
              </div>
            ) : (
              "Continue"
            )}
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
  padding-bottom: 4rem;

  p {
    color: var(--accent-color);
    font-size: 2.8rem;
    font-weight: 700;
    align-self: flex-start;
  }

  & input[type="text"] {
    width: 100%;
    outline: none;
    background-color: rgb(var(--primary-color));
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

    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }
`;
