//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ICoreCollection} from "../interfaces/ICoreCollection.sol";

contract CoreCollection is ICoreCollection, ERC721URIStorage {
    //counter to assign itemId
    uint256 private itemCounter;

    //counter to assign collectionId
    uint256 private collectionCounter;

    //Collection Structure
    struct Collection {
        uint256 collectionId;
        string name;
        address creator;
        uint256[] itemIds;
    }

    struct NFT {
        uint256 itemId;
        string nft_name;
        string nft_description;
        address creator;
        address owner;
        string externalLink;
    }

    mapping(uint256 => NFT) public NFTs;

    mapping(uint256 => address) public itemIdToOwner;

    //mapping from collectionId to Collection Structure
    mapping(uint256 => Collection) public collections;

    //mapping from collectionId to its creator
    mapping(uint256 => address) public collectionIdToUser;

    //mapping from user/creator to collections created by the person
    mapping(address => uint256[]) public userToCollectionIds;

    constructor() ERC721("Oasis", "OC") {}

    /**
     * @dev Emitted when new token with id '_newItemId' and URI '_tokenURI is created
     * @param _newItemId {uint} itemId for token
     * @param _tokenURI {string} IPFS URI
     */
    event tokenCreated(uint256 _newItemId, string _tokenURI);

    /**
     * @dev Emitted when new collection with '_name' is created
     * @param _name {string} name for the collection
     */
    event collectionCreated(string _name, uint256 _collectionId);

    /**
     * @dev Emitted when NFT is created successfully
     */
    event NFTCreated();

    /**
     * @dev function to mint NFT and add it to the collection
     * @param _tokenURI {string} IPFS URI
     * @param _collectionId {uint256} index to lookup particular collection of a user
     */

    function createToken(string memory _tokenURI, uint256 _collectionId)
        public
        override
        returns (uint256 newItemId)
    {
        itemCounter++;
        newItemId = itemCounter;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        collections[userToCollectionIds[msg.sender][_collectionId]]
            .itemIds
            .push(newItemId);

        emit tokenCreated(newItemId, _tokenURI);
        return newItemId;
    }

    /**
     * @dev function to create a new collection
     * @param _name {string} name of the collection
     */
    function createCollection(string memory _name) external override {
        collectionCounter++;
        uint256 newCollectionId = collectionCounter;

        collections[newCollectionId] = Collection({
            collectionId: newCollectionId,
            name: _name,
            creator: msg.sender,
            itemIds: new uint256[](0)
        });

        collectionIdToUser[newCollectionId] = msg.sender;
        userToCollectionIds[msg.sender].push(newCollectionId);
        emit collectionCreated(_name, newCollectionId);
    }

    function createNFT(string memory _NFTName, string memory _description)
        external
    {}

    // a test function
    function test(string memory _tokenURI) external returns (uint256) {
        uint256 id = createToken(_tokenURI, 0);
        return id;
    }
}
