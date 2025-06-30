const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

const web3 = new Web3('http://localhost:7545'); // Ganache default RPC

const contractPath = path.resolve(__dirname, '../contracts/SimpleStorage.sol');
const source = fs.readFileSync(contractPath, 'utf8');

// Assume contract is compiled externally and ABI/bytecode are provided
const contractABI = [ /* Insert ABI here */ ];
const contractBytecode = '0x...'; // Insert bytecode here

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying from account:', accounts[0]);

    const result = await new web3.eth.Contract(contractABI)
        .deploy({ data: contractBytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to:', result.options.address);
};

deploy();
