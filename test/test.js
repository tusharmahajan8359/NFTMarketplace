const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", async () => {
  let nft;
  let addr1;
  let addr2;
  let market;

  //deploying contract
  beforeEach(async () => {
    const Market = await ethers.getContractFactory("Market");
    market = await Market.deploy();

    const NFT = await ethers.getContractFactory("CoreCollection");
    nft = await NFT.deploy(market.address);

    [addr1, addr2] = await ethers.getSigners();
  });
  it("should deploy contract successfully", async () => {
    await nft.deployed();
  });
  it("should create collection successfully", async () => {
    const name = "collection_1";
    const tx = await nft.createCollection(name);
    const reciept = await tx.wait();
    const events = reciept.events.find(
      (event) => event.event === "CollectionCreated"
    );
    const [_name, _collectionId] = events.args;
    expect(_name).to.equal("collection_1");
    expect(_collectionId).to.equal(1);
  });

  it("should create NFT and add it to the collection", async () => {
    const collectionName = "collection_1";
    await nft.createCollection(collectionName);
    const tx = await nft.createNFT(
      "My NFT",
      0,
      "http://test2.com",
      "http://test.com"
    );
    const reciept = await tx.wait();
    const events = reciept.events.find((event) => event.event === "NFTCreated");
    const [_itemId, _NFTName] = events.args;
    expect(_itemId).to.equal(1);
    expect(_NFTName).to.equal("My NFT");
  });

  it("deploys Market Contract successfully", async () => {
    await market.deployed();
  });
  //
  it("should update the owner of the token after sending", async () => {
    const collectionName = "collection_1";
    await nft.createCollection(collectionName);
    await nft.createNFT("My NFT", 0, "http://test2.com", "http://test.com");
    expect(await nft.ownerOf(1)).to.equal(addr1.address);
    await market.sendNFT(1, addr2.address, nft.address);
    expect(await nft.ownerOf(1)).to.equal(addr2.address);
  });
  it("lists the NFT for Sale in Marketplace", async () => {
    const collectionName = "collection_1";
    await nft.createCollection(collectionName);
    await nft.createNFT("My NFT", 0, "http://test2.com", "http://test.com");
    const tx = await market.createMarketItem(
      1,
      ethers.utils.parseUnits("1", "ether"),
      nft.address,
      { value: ethers.utils.parseEther("0.25") }
    );
    const reciept = await tx.wait();
    const events = reciept.events.find((event) => event.event === "ItemListed");
    [_tokenId, _price] = events.args;
    expect(_price).to.equal(ethers.utils.parseUnits("1", "ether"));
  });

  it("Cancels NFT from listing", async () => {
    const collectionName = "collection_1";
    await nft.createCollection(collectionName);
    await nft.createNFT("My NFT", 0, "http://test2.com", "http://test.com");
    await expect(market.cancelListing(1, nft.address)).to.be.revertedWith(
      "The item should be listed for sale"
    );
    await market.createMarketItem(
      1,
      ethers.utils.parseUnits("1", "ether"),
      nft.address,
      { value: ethers.utils.parseEther("0.25") }
    );
  });

  it("should buy NFT and update the Owner", async () => {
    const collectionName = "collection_1";
    await nft.createCollection(collectionName);
    await nft.createNFT("My NFT", 0, "http://test2.com", "http://test.com");

    await expect(
      market.buyNFT(1, nft.address, { value: ethers.utils.parseEther("1") })
    ).to.be.revertedWith("Must pay the listed price");

    await market.createMarketItem(
      1,
      ethers.utils.parseUnits("1", "ether"),
      nft.address,
      { value: ethers.utils.parseEther("0.25") }
    );

    await expect(
      market.buyNFT(1, nft.address, { value: ethers.utils.parseEther("1") })
    ).to.be.revertedWith("Function cannot be called by the Owner");

    const tx = await market
      .connect(addr2)
      .buyNFT(1, nft.address, { value: ethers.utils.parseEther("1") });

    const reciept = await tx.wait();
    const events = reciept.events.find(
      (event) => event.event === "MarketSaleCreated"
    );
    [_tokenId, _buyer] = events.args;

    expect(_buyer).to.equal(await nft.ownerOf(1));
  });
});