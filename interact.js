const Web3 = require('web3');

const web3 = new Web3('http://localhost:7545');

const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
const contractABI = [ /* Insert ABI here */ ];

const contract = new web3.eth.Contract(contractABI, contractAddress);

const interact = async () => {
    const accounts = await web3.eth.getAccounts();

    await contract.methods.set(42).send({ from: accounts[0] });
    const result = await contract.methods.get().call();

    console.log('Stored value is:', result);
};

interact();
