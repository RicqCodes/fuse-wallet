import React from "react";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import { LuAlertTriangle, LuCopy } from "react-icons/lu";
import QRCode from "react-qr-code";

import { useAppSelector } from "../../services/hooks";
import { Button } from "../../styles/element.styled";
import { device } from "../../styles/utils.styled";

import { shortAddress } from "../../helper/utils";

interface Props {
  handleOffModal: () => void;
}

const WalletDisplay: React.FC<Props> = ({ handleOffModal }) => {
  const walletAddress = useAppSelector(({ app }) => app.address);
  const [wallet, setWallet] = useState(walletAddress);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    // Perform actions based on screen size
    if (screenWidth <= 538) {
      const shortenedWallet = shortAddress(wallet);
      setWallet(shortenedWallet);
    } else {
      setWallet(walletAddress);
    }
  };

  useEffect(() => {
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const copyToClipboard = (wallet: string): void => {
    try {
      navigator.clipboard.writeText(wallet);
      toast.success("Wallet address copied to clipboard");
    } catch (err) {
      toast.error("Could not copy to clipboard");
    }
  };
  return (
    <>
      <Heading>
        <h2>Your Public Address</h2>
        <GrClose style={{ cursor: "pointer" }} onClick={handleOffModal} />
      </Heading>
      <Body>
        <Contract>
          <QrCodeContainer onClick={() => copyToClipboard(walletAddress)}>
            <QRCode
              size={180}
              bgColor="white"
              fgColor="black"
              value={walletAddress}
            />
          </QrCodeContainer>
          <div>
            <p>{wallet}</p>
            <LuCopy onClick={() => copyToClipboard(walletAddress)} />
          </div>
        </Contract>
        <Note>
          <div>
            <LuAlertTriangle />
          </div>
          <p>Please make sure you are sending assets on the Fuse network</p>
        </Note>
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => handleOffModal()}
            $fontsize="1.6"
            $fullWidth
          >
            Close
          </Button>
        </ButtonContainer>
      </Body>
    </>
  );
};

export default WalletDisplay;

const Heading = styled.div`
  border-bottom: 1px solid rgb(var(--primary-color));
  width: 100%;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 2.4rem;

    path {
      stroke: var(--accent-color);
    }
  }

  h2 {
    font-size: 2.4rem;
  }

  ${() => device.down("sm")} {
    svg {
      display: none;
    }

    h2 {
      width: 100%;
      text-align: center;
    }

    padding: 3.8rem 0 0 0;
    border: none;
  }
`;

const Body = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 3.2rem 2.4rem;
  flex-direction: column;
  justify-content: center;

  ${() => device.down("sm")} {
    padding: 1.8rem;
  }
`;

const QrCodeContainer = styled.div`
  max-width: 23rem;
  width: 100%;
  background-color: rgb(var(--primary-color));
  /* padding: 2.4rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
`;

const Contract = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  > div:last-child {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
    padding: 2.4rem;

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  }
`;

const Note = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 167, 44, 0.5);
  background: #fff8c5;

  p {
    color: #000;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: var(--warning);
  }
`;

const ButtonContainer = styled.div`
  ${() => device.down("sm")} {
    button {
      padding: 1.65rem 0;
    }
  }
`;
