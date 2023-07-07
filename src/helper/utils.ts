import { ethers } from "ethers";

export const isWalletAddress = (address: string): boolean => {
  return ethers.isAddress(address);
};

export const shortAddress = (address: string): string => {
  return `${address.slice(0, 14)}.....${address.slice(-7)}`;
};

export const parseBalance = (number: string | undefined): number => {
  if (number === undefined || "") return 0;
  return parseInt(ethers.formatEther(number));
};

export const calculatePercentageOfSupply = (
  totalSupply: number | string,
  userBalance: number | string
): number | string => {
  if (typeof totalSupply === "string" && typeof userBalance === "string") {
    return ((parseInt(userBalance) / parseInt(totalSupply)) * 100).toFixed(3);
  } else {
    if (totalSupply === 0 || userBalance === 0) {
      return 0; // Avoid division by zero
    }
    return (((userBalance as number) / (totalSupply as number)) * 100).toFixed(
      3
    );
  }
};
