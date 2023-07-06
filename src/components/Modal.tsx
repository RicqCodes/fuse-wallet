import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { LuAlertTriangle } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import copy from "../assets/copy.svg";
import { Button } from "../styles/element.styled";
import { shortAddress } from "../helper/shortenAddress";

import { popup, slideUpDown } from "../styles/animation.styled";
import { device } from "../styles/utils.styled";

interface Props {
  setShowModal: (value: boolean) => void;
}

const Modal: React.FC<Props> = ({ setShowModal }) => {
  const [wallet, setWallet] = useState(
    "0xe3A133EC46aB6625342eA4465AF38fC0A7769d31"
  );

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    // Perform actions based on screen size
    if (screenWidth <= 538) {
      console.log(screenWidth);
      const shortenedWallet = shortAddress(wallet);
      setWallet(shortenedWallet);
    } else {
      setWallet("0xe3A133EC46aB6625342eA4465AF38fC0A7769d31");
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

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <ModalOuterContainer onClick={() => setShowModal(false)}>
      <InnerContent>
        <Content onClick={stopPropagation}>
          <Heading>
            <h2>Your Public Address</h2>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(false)}
            >
              <GrClose />
            </div>
          </Heading>
          <Body>
            <Contract>
              <p>{wallet}</p>
              <img src={copy} alt="" />
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
                onClick={() => setShowModal(false)}
                $fontsize="1.6"
                $fullWidth
              >
                Close
              </Button>
            </ButtonContainer>
          </Body>
        </Content>
      </InnerContent>
    </ModalOuterContainer>
  );
};

export default Modal;

const ModalOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;

  transition: all 0.5s ease-in-out;
  /* animation: ${slideUpDown} 0.5s linear; */
`;

const InnerContent = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${() => device.down("sm")} {
    padding: 0;
    align-items: flex-end;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 82.6rem;
  width: 100%;
  background-color: var(--secondary-color);
  flex-direction: column;
  border-radius: 12px;
  animation: ${popup} 0.5s linear;

  ${() => device.down("sm")} {
    border-radius: 0%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    animation: ${slideUpDown} 0.5s linear;
  }
`;

const Heading = styled.div`
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  padding: 2.4rem;
  /* border: 4px solid #000; */
  display: flex;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 2.4rem;
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
  /* align-items: center; */
  justify-content: center;

  ${() => device.down("sm")} {
    padding: 1.8rem;
  }
`;

const Contract = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  height: 4.8rem;
  align-items: center;
  padding: 2.4rem;
  border-radius: var(--border-radius);

  svg {
    height: 1.6rem;
    width: 1.6rem;
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

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: var(--warning);
  }
`;

const ButtonContainer = styled.div`
  padding: 1.8rem 0 3.2rem 0;

  ${() => device.down("sm")} {
    button {
      padding: 1.65rem 0;
    }
  }
`;
