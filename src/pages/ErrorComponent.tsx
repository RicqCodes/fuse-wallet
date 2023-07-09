import { Link, useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../styles/element.styled";

interface ErrorType extends Error {
  statusText?: string;
}

const ErrorComponent = () => {
  const error = useRouteError() as ErrorType;

  return (
    <ErrorContainer>
      <HeadingText>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </HeadingText>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button $fontsize="1.6">
        <Link to="/">Go to Homepage</Link>
      </Button>
    </ErrorContainer>
  );
};

export default ErrorComponent;

const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 3.6rem;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.8rem;
  }

  button {
    cursor: pointer;

    a {
      color: #fff;
    }
  }
`;

const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
