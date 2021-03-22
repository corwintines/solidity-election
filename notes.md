Technology
- npm (libraries)
- Truffle (https://www.trufflesuite.com/truffle)
  - framework to make decentralized applications on the ethereum network
  - Gives us a suite of tools that lets us write smart contracts using solidity
  - Lets us test our smart contracts
  - Tools to deploy our smart contracts to blockchain
  - Develop client side applkcation
- Gnache (https://www.trufflesuite.com/ganache)
  - Local in memory blockchain for development
- MetaMask
  - Wallet
  - Browser extension to connect with ethereum network
  

Commands (have ganache open):
`truffle unbox {boilerplate}` - Install a boilerplate environment for development. 
`truffle migrate` - Deploy smart contract migrations
`truffle test` - Runs unit tests
`truffle console` - Opens cli to interact with truffle

- Order migrations in migrations directory with number at the start so that truffle knows what order to apply migrations
  - Can reference migration files to make new ones in future

- {Contract}.deployed().then(function(instance) { app=instance })
  - Allows you to access the instance of the depoloyed Contract in the truffle cli
  - app.address is the account address for the contract
  - app.{variable}() allows you to use the getter for variables in smart contract

- Reads on blockchain are free, writes on the blockchain costs gas
- Deploying smart contracts is a write, and therefore costs gas to deploy

- Solidity lets us make structure types using struct

- mapping(key => value) in solidity creates a key value hash
  - Pass in types for key and value

- In Solidity you cant loop over mappings or get size of mapping. If you give a key that "doesnt exist" you will get a blank default value.

- `truffle migrate --reset`
  - Blockchain data is immutable, so we use the --reset in development to rereun migrations from start
  - like dropping tables and rerunning migrations in web development

- If converting numbers in solidity, use .toNumber()

- web3.eth.getAccounts()
  - Lists all accounts connected in network

- Testing seems more important in contracts as the cost of missing these is more expensive

- Truffle comes bundles with mocha and chai testing frameworks