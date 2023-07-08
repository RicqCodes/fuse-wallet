import { ethers } from "ethers";
import {
  TokenInfo,
  Token,
  TokenList,
  PriceData,
  NativeBalance,
} from "../services/types";

export const isWalletAddress = (address: string): boolean => {
  return ethers.isAddress(address);
};

export const shortAddress = (address: string): string => {
  return `${address.slice(0, 14)}.....${address.slice(-7)}`;
};

export const parseBalance = (number: string | undefined): string => {
  if (number === undefined || number === "") return "0";
  return Number(ethers.formatEther(number)).toFixed(3);
};

export const calculatePercentageOfSupply = (
  totalSupply: number | string,
  userBalance: number | string
): number | string => {
  if (typeof totalSupply === "string" && typeof userBalance === "string") {
    return Math.round((parseInt(userBalance) / parseInt(totalSupply)) * 100);
  } else {
    if (totalSupply === 0 || userBalance === 0) {
      return 0; // Avoid division by zero
    }
    return Math.round(
      ((userBalance as number) / (totalSupply as number)) * 100
    );
  }
};

export const createQueryString = (
  CAs: TokenInfo[] | undefined,
  defaultCA: Token[]
): string => {
  const mergedCAs = CAs || []; // Default to an empty array if CAs is undefined
  const tokenList = [...mergedCAs, ...defaultCA];
  if (CAs === undefined) return "";

  const queryString = tokenList
    .map((ca) => {
      return ca.contractAddress;
    })
    .join(",");
  return queryString;
};

export const calculateTokenPriceInUSD = (
  tokenPrice: number | string,
  tokenBalance: number | string
): string => {
  if (typeof tokenPrice === "string" || typeof tokenBalance === "string") {
    return Number(+tokenPrice * +tokenBalance).toFixed(3);
  }

  return (tokenPrice * tokenBalance).toFixed(3);
};

export const calculateTotalBalance = (
  defaultToken: Token[],
  tokenList: TokenList | undefined,
  tokenPrice: PriceData | undefined,
  nativeBalance: NativeBalance | undefined
) => {
  let totalBalance = 0;

  // Calculate the balance for default tokens
  defaultToken.forEach((token) => {
    const balance = parseBalance(nativeBalance?.result) || 0;
    const price = tokenPrice?.[token.contractAddress]?.usd || 0;
    const tokenBalance = calculateTokenPriceInUSD(price, balance);
    totalBalance += +tokenBalance;
  });

  // Calculate the balance for custom tokens
  if (tokenList?.result) {
    tokenList?.result.forEach((token) => {
      const balance = parseBalance(token.balance) || 0;
      const price = tokenPrice?.[token.contractAddress]?.usd || 0;
      const tokenBalance = calculateTokenPriceInUSD(price, balance);
      totalBalance += +tokenBalance;
    });
  }

  return totalBalance.toFixed(2);
};
