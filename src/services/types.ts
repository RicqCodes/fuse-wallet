interface Response {
  message: string;
  status: string;
}

export interface TokenInfo {
  balance: string;
  contractAddress: string;
  decimals: string;
  name: string;
  symbol: string;
  type: string;
}

export interface TokenList extends Response {
  result: TokenInfo[];
}

export interface TokenDetails extends Response {
  result: string;
}

export interface NativeBalance extends Response {
  result: string;
}

export interface AppState {
  address: string;
}
