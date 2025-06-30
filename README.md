# Smart Contract Deployment on Ganache using Node.js & Remix IDE

## Overview
This project demonstrates the creation and execution of a blockchain smart contract using Ganache and Remix IDE in a local development environment.

## Skills Showcased
- Smart contract development with Solidity
- Local blockchain setup with Ganache
- Node.js & npm configuration
- Deployment using Remix IDE
- Interaction with deployed contracts using Node.js scripts

## Prerequisites
- Node.js and npm installed
- Ganache (GUI or CLI)
- Remix IDE (online or local)
- Linux OS / VMWare setup (optional for demonstration)

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/pr-of/smart-contract-ganache-demo.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Ganache and set endpoint in `truffle-config.js`.

## Deploy the Contract
Run the deploy script:
```bash
node scripts/deploy.js
```

## Interact with the Contract
Run the interaction script:
```bash
node scripts/interact.js
```

## Smart Contract: SimpleStorage
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
```

## Project Screenshots
Screenshots demonstrating the setup, Ganache environment, contract deployment, and response.

## License
MIT License
