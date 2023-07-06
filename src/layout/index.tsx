import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  padding: 0 12.4rem 3.45rem 12.4rem;
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & main {
    width: 100%;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;

    > div {
      height: calc(100vh - 14rem);
    }
  }

  @media screen and (max-width: 970px) {
    padding: 2.4rem;

    main {
      padding: 0;
    }
  }
`;
