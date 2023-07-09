import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isAddress } from "ethers";
import { styled } from "styled-components";
import { AiOutlineScan } from "react-icons/ai";

import { Button, Loader } from "../styles/element.styled";
import Card from "../components/Card";

import { addAddress } from "../services/slice";
import { toast } from "react-hot-toast";
import { useLazyGetAllTokenByAddressQuery } from "../services/fuseApi";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import QrReader from "./_molecules/QrReader";

const WalletInput: React.FC = () => {
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
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
          <InputWrapper>
            <input
              type="text"
              placeholder="Enter or copy wallet address"
              onChange={(e) => setWalletAddress(e.target.value)}
              value={walletAddress}
            />
            <div onClick={() => setShowModal(true)}>
              <AiOutlineScan />
            </div>
          </InputWrapper>
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
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <QrReader
            setShowModal={setShowModal}
            setWalletAddress={setWalletAddress}
          />
        </Modal>
      )}
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
  margin-top: 6.4rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  background-color: rgb(var(--primary-color));
  height: 4.8rem;
  border-radius: var(--border-radius);
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  color: var(--accent-color);

  & input[type="text"] {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    font-size: 1.8rem;

    &::placeholder {
      font-size: 1.6rem;
      color: var(--tertiary-color);
    }
  }

  > div {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      /* color: var(--accent-color); */
    }
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  margin-top: 6.4rem auto;
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
