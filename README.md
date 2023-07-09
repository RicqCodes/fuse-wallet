# Fuse Wallet MVP Documentation

The Fuse Wallet MVP is a React application that allows users to view their token balances on the Fuse Network and receive tokens. This documentation provides an overview of the implementation details for MyFuseWallet MVP, a React application that displays token balances on the Fuse Network and enables token reception.

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

3. Launch the application:

```shell
npm start
```

## Implementation Details

### Directory Structure

```shell
public/
src/                  # The main source code directory.
  assets/             # Contains assets necessary for the app
  components/         # Contains reusable React components.
  helper/             # Contains utility functions and helpers.
  hooks/              # Contains custom hooks for application
  layout/             # Contains application layout
  pages/              # Contains the main pages of the application.
  services/           # Includes API service files for interacting with the Fuse Explorer API.
  styles/             # Contains global styling
  main.js             # Renders the React app to the DOM and the entry point of the application.
```

## Implementation Details

### Inserting Wallet Address

- The `WalletInput` component allows users to input their wallet address.
- On submission. i.e on click of sumbit, `handleWalletSubmit` function is called. The entered address is ran through a validation check if wallet is a valid one, it is then stored in the component's state.
- The function then sends a request to the Fuse Explorer API to fetch necessary details.

### Visualizing Token Balances

- The `WalletInfo` component has the implementation to retrieves the user's token balances from the Fuse Explorer API using the `tokenlist` endpoint
  available on coingecko's api
- It displays 2 cards the user balance and the wallets token holdings
- The Balances are calculated based on the token the wallet token holdings and if it is on coingecko's price feeds.

### Detailed Token Information

- When a user selects a token on the `WalletInfo` page, the `CoinDetails` component is rendered.
- The component makes an API call to the Fuse Explorer API's `tokensupply` endpoint, passing the token's contract address.
- The received data is parsed to extract the total supply of the token and the user's percentage of the supply.

### Receiving Tokens

- The `ReceiveButton` on the `WalletInfo` component displays a modal.
- The modal contains the user's public address which can be copied for receiving tokens.

### QR Code Functionality

- The `ReceiveButton` includes QR code functionality using a third-party library called `react-qr-code`.
- Upon clicking the "Receive" button, a QR code of the user's wallet address is displayed in the modal.
- Additionally, the wallet address input field on the `WalletInput` page has a "Scan QR Code" icon that triggers the device's camera to scan a QR code representing a wallet address.

### Dark Mode and Light Mode

- The application includes a toggling feature for Dark Mode and Light Mode.
- The selected mode is stored in both application's state and local storage to persist users choice.

## Dependencies

- React: JavaScript library for building user interfaces.
  -@reduxjs/toolkit: Redux toolkit for efficient Redux development.
  -ethers: Library for interacting with Ethereum and Ethereum-like blockchains.
  -react: JavaScript library for building user interfaces.
  -react-dom: React package for working with the DOM.
  -react-hot-toast: React library for customizable toast notifications.
  -react-icons: Collection of popular icons as React components.
  -react-qr-code: Library for generating QR codes in React applications.
  -react-qr-scanner: React component for scanning QR codes using the device's camera.
  -react-redux: React bindings for Redux state management.
  -react-router-dom: Routing library for React applications.
  -styled-components: CSS-in-JS library for styling React components.

## Acknowledgments

- The Fuse Wallet MVP is based on the requirements provided by Fuse Wallet.
- The project utilizes the Fuse Explorer API for retrieving token data and Coingecko API for retreiving prices.

Feel free to explore the source code in the repository for detailed implementation and code examples.
