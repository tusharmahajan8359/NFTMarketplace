const hre = require("hardhat");

async function main() {
  
  const NFT = await hre.ethers.getContractFactory("CoreCollection");
  const nft = await Greeter.deploy();

  await nft.deployed();

  console.log("CoreCollection deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
