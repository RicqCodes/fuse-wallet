import { Link, useRouteError } from "react-router-dom";
import { TiWarning } from "react-icons/ti";
import { styled } from "styled-components";
import { Button } from "../styles/element.styled";

interface ErrorType extends Error {
  statusText?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorType;

  return (
    <ErrorContainer>
      <Heading>
        <TiWarning />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </Heading>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button $fontsize="1.6">
        <Link to="/">Go to Homepage</Link>
      </Button>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 2.8rem;
  padding: 2.4rem;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.8rem;
    text-align: center;

    i {
      color: var(--warning);
    }
  }

  button {
    cursor: pointer;

    a {
      color: #fff;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 14rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;
