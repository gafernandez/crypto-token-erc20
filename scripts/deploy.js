const hre = require("hardhat");

async function main() {

  const [owner] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const simpletoken = await SimpleToken.connect(owner).deploy(1000);

  await simpletoken.deployed();

  console.log("Token address:", simpletoken.address);

  console.log("Balance of Owner address: ", await simpletoken.balanceOf(owner.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
