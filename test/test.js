const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", async () => {
    let nft;
    let addr1;
    let addr2;
    let market;
    
    //deploying contract
    beforeEach(async () => {
        const NFT = await ethers.getContractFactory("CoreCollection");
        nft = await NFT.deploy();

        const Market = await ethers.getContractFactory("Market");
        market = await Market.deploy(nft.address);
        
        [addr1, addr2] = await ethers.getSigners();
    })
    it("should deploy contract successfully", async () => {
        await nft.deployed();
    })
    it("should create collection successfully", async () => {
        const name = "collection_1";
        const tx = await nft.createCollection(name);
        const reciept = await tx.wait();
        const events = reciept.events.find((event) => event.event==='collectionCreated',);
        const [_name, _collectionId] = events.args;
        expect(_name).to.equal("collection_1");
        expect(_collectionId).to.equal(1);

    })
    it("should create NFT Token and set tokenURI", async () => {
        const tx = await nft.createToken("http://test.com");
        const reciept = await tx.wait();
        const events = reciept.events.find((event) => event.event==='tokenCreated');
        const [_newItemId, _tokenURI] = events.args;
        expect(_newItemId).to.equal(1)
        expect(await nft.tokenURI(_newItemId)).to.equal("http://test.com")
    })
    it("should create NFT and add it to the collection", async () => {
        const collectionName = "collection_1";
        await nft.createCollection(collectionName);
        const tx = await nft.createNFT("My NFT", 0, "http://test2.com", "http://test.com")
        const reciept = await tx.wait();
        const events = reciept.events.find((event) => event.event==='NFTCreated');
        const [_itemId, _NFTName] = events.args;
        expect(_itemId).to.equal(1);
        expect(_NFTName).to.equal("My NFT");
    })
    // it("test case", async () => {
    //     await nft.createToken("http://test.com");
    //     console.log(await nft.ownerOf(1))
    //     await nft.transferFrom("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 1)
    //     console.log(await nft.ownerOf(1))
    // })

    it("deploys Market Contract successfully", async () => {
        await market.deployed();
    })
    
    it("should update the owner of the token after sending", async () => {
        await nft.createToken("http://test.com");
        expect(await nft.ownerOf(1)).to.equal(addr1.address);
        console.log(await nft.ownerOf(1))
        await market.connect(addr1).sendNFT(1, addr2.address);
        // expect(await nft.ownerOf(1)).to.equal(addr2.address);
        console.log(await nft.ownerOf(1))
    })
})