const { expect } = require("chai");

describe("Hi contract", function () {
  it("Should deploy the contract and set name", async function () {
    const HiContract = await ethers.deployContract("Hi", ["Tina"]);

    // const HiContractArtifact = await ethers.getContractFactory("Hi");
    // const HiContract = HiContractArtifact.attach(
    //   "0x5fbdb2315678afecb367f032d93f642f64180aa3" // The deployed contract address
    // );

    expect(await HiContract.name()).to.equal("Tina");
  });

  it("View account balance", async function () {
    const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";
    const balance = await ethers.provider.getBalance(address);
    // const formattedBalance = ethers.utils.formatEther(balance);
    console.log("Balance:", balance);
  });
});
