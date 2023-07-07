import { keyframes } from "styled-components";

export const popup = keyframes`
    0% {
      transform: scale(80%);
    }

    50% {
      transform: scale(110%);
    }

    100% {
        transform: scale(100%);
    }
`;

export const slideInDown = keyframes`
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    `;

export const slideUpDown = keyframes`
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    `;

export const spin = keyframes`
   
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  
`;
