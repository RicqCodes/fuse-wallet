import React from "react";
import { styled } from "styled-components";
import { GrClose } from "react-icons/gr";
import { device } from "../../styles/utils.styled";
import QrScanner from "react-qr-scanner";

interface Props {
  setShowModal: (value: boolean) => void;
  setWalletAddress: (value: string) => void;
}

interface ScanResult {
  text: string;
  format: number;
  numBits: number;
  rawBytes: Uint8Array;
  resultMetadata: Map<number, any>;
  resultPoints: any[];
  timestamp: number;
}

const QrReader: React.FC<Props> = ({ setShowModal, setWalletAddress }) => {
  const handleScan = (data: ScanResult | null) => {
    if (data) {
      console.log(data);
      setWalletAddress(data.text);
      setShowModal(false);
    }
  };

  const handleError = (error: Error) => {
    console.error(error);
  };

  return (
    <>
      <Heading>
        <h2>Scan QR Code</h2>
        <div style={{ cursor: "pointer" }} onClick={() => setShowModal(false)}>
          <GrClose />
        </div>
      </Heading>
      <Body>
        <ScannerContainer>
          <QrScanner
            delay={300}
            facingMode={"rear"}
            legacyMode={true}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
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
