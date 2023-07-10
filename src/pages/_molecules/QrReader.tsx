import React from "react";
import { styled } from "styled-components";
import { GrClose } from "react-icons/gr";
import { device } from "../../styles/utils.styled";
// import QrScanner from "react-qr-scanner";

import { useZxing } from "react-zxing";
interface Props {
  handleOffModal: () => void;
  setWalletAddress: (value: string) => void;
}

const QrReader: React.FC<Props> = ({ handleOffModal, setWalletAddress }) => {
  const constraints: MediaStreamConstraints = {
    video: {
      facingMode: "rear",
    },
    audio: false,
  };

  const { ref } = useZxing({
    onResult(result) {
      setWalletAddress(result.getText());
      handleOffModal();
    },
    constraints,
  });

  return (
    <>
      <Heading>
        <h2>Scan QR Code</h2>
        <div style={{ cursor: "pointer" }} onClick={handleOffModal}>
          <GrClose />
        </div>
      </Heading>
      <Body>
        <ScannerContainer>
          <video ref={ref} />
        </ScannerContainer>
      </Body>
    </>
  );
};

export default QrReader;

const Heading = styled.div`
  border-bottom: 1px solid rgb(var(--primary-color));
  width: 100%;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  color: var(--accent-color);

  h2 {
    font-size: 2.4rem;
  }

  svg {
    height: 3.2rem;
    width: 2.4rem;

    path {
      stroke: var(--accent-color);
    }
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
  width: 100%;
  gap: 1.2rem;
  padding: 3.2rem 2.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${() => device.down("sm")} {
    padding: 1.8rem;
  }
`;

const ScannerContainer = styled.div`
  max-width: 48rem;
  width: 100%;
  border: 4px dashed var(--accent-color);
  border-radius: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 34rem;

  ${() => device.down("sm")} {
    height: 22rem;
    border-radius: 4.8rem;
  }
`;
