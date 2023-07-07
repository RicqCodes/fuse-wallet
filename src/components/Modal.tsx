import React, { ReactElement } from "react";
import { styled } from "styled-components";

import { popup, slideUpDown } from "../styles/animation.styled";
import { device } from "../styles/utils.styled";

interface Props {
  setShowModal: (value: boolean) => void;
  children: ReactElement;
}

const Modal: React.FC<Props> = ({ setShowModal, children }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <ModalOuterContainer onClick={() => setShowModal(false)}>
      <InnerContent>
        <Content onClick={stopPropagation}>{children}</Content>
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
  z-index: 999;
  transition: all 0.5s ease-in-out;
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
