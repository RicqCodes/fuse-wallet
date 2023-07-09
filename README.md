# Fuse Wallet MVP Documentation

The Fuse Wallet MVP is a React application that allows users to view their token balances on the Fuse Network and receive tokens. This documentation provides an overview of the project requirements, wallet functionalities, and technical implementation details.

# MyFuseWallet MVP Documentation

This documentation provides an overview of the implementation details for MyFuseWallet MVP, a React application that displays token balances on the Fuse Network and enables token reception.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/ricqcodes/fuse-wallet.git
```

2. Install dependencies:

```shell
cd myfusewallet
npm install
```

## Usage

1. Launch the application:

```shell
npm start
```

## Implementation Details

### Directory Structure

```shell
public/
src/                  # The main source code directory.

  components/         # Contains reusable React components.
  pages/              # Contains the main pages of the application.
  services/           # Includes API service files for interacting with the Fuse Explorer API.
  utils/              # Contains utility functions and helpers.
  App.js              # The entry point of the application.
  index.js            # Renders the React app to the DOM.



## Wallet Functionalities

### Inserting Wallet Address

- Users need to input their unique wallet address upon launching the wallet.

### Visualizing Token Balances

- After entering the wallet address, users can view a list of tokens they possess on the Fuse Network. The list includes each token's name, symbol, and balance. The `tokenlist` endpoint from the Explorer API is used to implement this feature.

### Detailed Token Information

- Users can access additional information about a selected token, such as its total supply and the user's percentage of that supply. This information is obtained using the Explorer API and the following endpoint: `https://explorer.com/api?module=stats&action=tokensupply&contractaddress={contractAddressHash}`. Note that the received number will be in a raw format, requiring decimal removal.

### Receiving Tokens

- Users can tap the "Receive" button to open a modal containing their public address, which they can copy to receive tokens.
- Implement a mechanism to automatically refresh token balances upon receiving tokens, such as using event listeners or periodic balance checks.

### Bonus Task: QR Code Functionality

Incorporate QR code functionality to enhance user experience:

1. **QR Code Generation**: Display a QR code of the user's wallet address when they click the "Receive" button. This allows other users to easily scan the QR code to transfer tokens.
2. **QR Code Scanning**: Add a "Scan QR Code" function to the wallet address input field, allowing users to scan a QR code representing a wallet address with their device's camera to automatically fill the address field.
3. Implement a toggling feature for Dark Mode and Light Mode.

## Technical Implementation

### Utilizing Fuse Explorer API

- Use the Fuse Explorer API to retrieve data not yet implemented in the SDK. The base API URL is [https://explorer.fuse.io/api](https://explorer.fuse.io/api).
- Refer to the comprehensive [API documentation](https://explorer.fuse.io/api-docs#token) for more details.

### Accurate Display of Balances

- Balances are returned in a raw format, and decimals must be accounted for.
- Use a mathematical formula or the [ethers.js](https://docs.ethers.org/v6/) / [web3.js](https://web3js.org/) library to calculate and display the user's token balance accurately up to three decimal points.
```
