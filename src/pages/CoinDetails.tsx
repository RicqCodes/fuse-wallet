import React, { useMemo } from "react";
import { styled } from "styled-components";
import Card from "../components/Card";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  useGetAllTokenByAddressQuery,
  useGetTokenSupplyQuery,
} from "../services/fuseApi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { TokenInfo } from "../services/types";
import { calculatePercentageOfSupply, parseBalance } from "../helper/utils";

const CoinDetails: React.FC = () => {
  const { contractAddress } = useParams<{ contractAddress?: string }>();
  const [searchParams] = useSearchParams();
  const wallet = searchParams.get("wallet");
  const { data: tokenList } = useGetAllTokenByAddressQuery(wallet || "");
  const { data: tokenDetails } = useGetTokenSupplyQuery(contractAddress || "");
  const navigate = useNavigate();

  const tokens = tokenList?.result;

  const filterToken = (tokenArr: TokenInfo[] | undefined) => {
    if (tokenArr !== undefined) {
      return tokenArr.filter(
        (token) => token.contractAddress === contractAddress
      );
    }
  };

  const filteredToken = useMemo<TokenInfo[] | undefined>(
    () => filterToken(tokens),
    [tokens]
  );

  return (
    <DetailsContainer>
      <FiArrowLeftCircle onClick={() => navigate(-1)} />
      <h2>Details</h2>

      <Card>
        <InnerContainer>
          <h3>{filteredToken?.[0]?.name}</h3>
          <InnerDetail>
            <Detail>
              <h4>Symbol</h4>
              <p>{filteredToken?.[0]?.symbol}</p>
            </Detail>
            <Detail>
              <h4>Name</h4>
              <p>{filteredToken?.[0]?.name}</p>
            </Detail>
            <Detail>
              <h4>Total Supply</h4>
              <p>{parseBalance(tokenDetails?.result) || 0}</p>
            </Detail>
            <Detail>
              <h4>Decimals</h4>
              <p>{filteredToken?.[0]?.decimals || 18}</p>
            </Detail>
            <Detail>
              <h4>Percentage of Supply</h4>
              <p>
                {calculatePercentageOfSupply(
                  parseBalance(tokenDetails?.result),
                  parseBalance(filteredToken?.[0]?.balance)
                ) || 0}
                %
              </p>
            </Detail>
          </InnerDetail>
        </InnerContainer>
      </Card>
    </DetailsContainer>
  );
};

export default CoinDetails;

const DetailsContainer = styled.div`
  margin: 6.4rem auto;
  max-width: 82.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-items: center;
  color: var(--accent-color);

  svg,
  h2 {
    align-self: flex-start;
    font-size: 2.8rem;
  }

  svg {
    cursor: pointer;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 4rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const InnerDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Detail = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }

  &:nth-child(odd) {
    background-color: rgb(var(--primary-color));
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 447px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;
