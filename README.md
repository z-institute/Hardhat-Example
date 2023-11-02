# Hardhat Common Commands

## Command

1. Compile the contract

```bash
npx hardhat compile
```

2. Run a local blockchain network

```bash
npx hardhat node

npx hardhat node --fork https://mainnet.infura.io/v3/edb3ab1be8ee46eca1b5ee5e72ea139a --fork-block-number 18484706
```

3. Run test on local network

```bash
npx hardhat test --network local
```

4. Run test on other network

Set the network configuration in `hardhat.config.js` file first. Then run the following command.

```bash
npx hardhat test --network networkName
```
