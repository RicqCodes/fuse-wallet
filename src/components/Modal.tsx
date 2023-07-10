import React, { ReactElement, useRef } from "react";
import { css, styled } from "styled-components";

import { popup, slideUpDown } from "../styles/animation.styled";
import { device } from "../styles/utils.styled";

interface Props {
  transition: boolean;
  handleOffModal: () => void;
  toggledElementRef: React.RefObject<HTMLDivElement>;
  children: ReactElement;
}

interface Content {
  $transition: boolean;
}

const Modal: React.FC<Props> = ({
  transition,
  handleOffModal,
  toggledElementRef,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <ModalOuterContainer ref={toggledElementRef} onClick={handleOffModal}>
      <InnerContent>
        <Content
          id="content"
          className="transition"
          $transition={transition}
          ref={contentRef}
          onClick={stopPropagation}
        >
          {children}
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

const Content = styled.div<Content>`
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
    padding-bottom: 9.3rem;
  }

  &.transition {
    ${({ $transition }) =>
      $transition === true
        ? css`
            &.transition {
              transform: translateY(560px);
              transition: transform 0.5s ease-in;
            }
          `
        : ""}
  }
`;
