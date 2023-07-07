// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TokenList, TokenDetails, NativeBalance } from "./types";

// Define a service using a base URL and expected endpoints
export const fuseApi = createApi({
  reducerPath: "fuseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://explorer.fuse.io/api" }),
  endpoints: (builder) => ({
    getAllTokenByAddress: builder.query<TokenList, string>({
      query: (address) => `?module=account&action=tokenlist&address=${address}`,
    }),
    getTokenSupply: builder.query<TokenDetails, string>({
      query: (contractAddress) =>
        `?module=stats&action=tokensupply&contractaddress=${contractAddress}`,
    }),
    getNativeTokenBalance: builder.query<NativeBalance, string>({
      query: (address) => `?module=account&action=balance&address=${address}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetAllTokenByAddressQuery,
  useGetAllTokenByAddressQuery,
  useGetTokenSupplyQuery,
  useGetNativeTokenBalanceQuery,
} = fuseApi;
