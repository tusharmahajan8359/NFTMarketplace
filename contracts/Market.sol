//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IMarket} from "../interfaces/IMarket.sol";

contract Market is IMarket {
    uint256 private offerCount;

    //Listing Fees for the Market
    uint256 public listingFee = 0.25 ether;

    //Mapping from itemId to its status
    mapping(uint256 => bool) public idToOnSale;

    //mapping from itemId to its current price
    mapping(uint256 => uint256) public idToPrice;

    //mapping from itemId to its offerIds
    mapping(uint256 => uint256[]) public idToOffers;

    //mapping from offerId to its price
    mapping(uint256 => uint256) public offerIdtoPrice;

    mapping(uint256 => mapping(address => uint256[])) public idToUserOffers;

    constructor() {}

    /**
     * @dev Event emitted when '_tokenId' is transfered from '_from' to '_to'
     */
    event TransferNFT(address _from, address _to, uint256 _tokenId);

    /**
     * @dev Event emitted when NFT with '_tokenId' is put for Listing
     */
    event ItemListed(uint256 _tokenId, uint256 _price);

    /**
     * @dev Event emitted when NFT with '_tokenId' is removed from Listing by the owner
     */
    event CancelListing(uint256 _tokenId);

    /**
     * @dev Event emitted when a '_buyer' buys NFT with token ID '_tokenId'
     */
    event MarketSaleCreated(uint256 _tokenId, address _buyer);

    event OfferSent(uint256 _tokenId, uint256 _offerPrice);

    event OfferAccepted(uint256 _tokenId, uint256 _offerPrice);

    /**
     * @dev Function to send NFT to someone else
     * @param _tokenId {uint256} Id of the NFT token to be transfered
     * @param _to {address} Address of the person to whom the token is to be transfered
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function sendNFT(
        uint256 _tokenId,
        address _to,
        address _coreCollection
    ) external {
        address _from = IERC721(_coreCollection).ownerOf(_tokenId);
        IERC721(_coreCollection).transferFrom(_from, _to, _tokenId);
        emit TransferNFT(_from, _to, _tokenId);
    }

    /**
     * @dev Function to List NFT for sale
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _price {uint256} Price to be set for the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function createMarketItem(
        uint256 _tokenId,
        uint256 _price,
        address _coreCollection
    ) external payable {
        require(
            msg.sender == IERC721(_coreCollection).ownerOf(_tokenId),
            "Function can only be called by the owner"
        );
        require(msg.value == listingFee, "Must pay the required Listing Fee");
        idToOnSale[_tokenId] = true;
        idToPrice[_tokenId] = _price;

        emit ItemListed(_tokenId, idToPrice[_tokenId]);
    }

    /**
     * @dev Function to cancel the listing of the NFT from Marketplace
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function cancelListing(uint256 _tokenId, address _coreCollection) external {
        require(
            msg.sender == IERC721(_coreCollection).ownerOf(_tokenId),
            "Function can only be called by the owner"
        );
        require(
            idToOnSale[_tokenId] == true,
            "The item should be listed for sale"
        );
        idToOnSale[_tokenId] = false;
        idToPrice[_tokenId] = 0;

        emit CancelListing(_tokenId);
    }

    /**
     * @dev Function to Buy NFT
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function buyNFT(uint256 _tokenId, address _coreCollection)
        external
        payable
    {
        uint256 _price = idToPrice[_tokenId];
        require(msg.value == _price, "Must pay the listed price");
        require(
            msg.sender != IERC721(_coreCollection).ownerOf(_tokenId),
            "Function cannot be called by the Owner"
        );

        this.sendNFT(_tokenId, msg.sender, _coreCollection);
        idToOnSale[_tokenId] = false;
        idToPrice[_tokenId] = 0;

        emit MarketSaleCreated(_tokenId, msg.sender);
    }

    /**
     * @dev Function to Make an offer to a NFT
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function makeOffer(
        uint256 _tokenId,
        uint256 _offerPrice,
        address _coreCollection
    ) external {
        require(
            msg.sender != IERC721(_coreCollection).ownerOf(_tokenId),
            "Owner cannot make offers"
        );

        offerCount++;

        idToOffers[_tokenId].push(offerCount);
        offerIdtoPrice[offerCount] = _offerPrice;
        idToUserOffers[_tokenId][msg.sender].push(offerCount);

        emit OfferSent(_tokenId, _offerPrice);
    }

    /**
     * @dev Function to accept the offer on a NFT owned
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _offerIndex {uint256} Index of offers array returned from the mapping
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function acceptOffer(
        uint256 _tokenId,
        uint256 _offerIndex,
        address _coreCollection
    ) external {
        require(
            msg.sender == IERC721(_coreCollection).ownerOf(_tokenId),
            "Only owner can accept the offer"
        );

        idToOnSale[_tokenId] = false;
        idToPrice[_tokenId] = 0;

        emit OfferAccepted(
            _tokenId,
            offerIdtoPrice[idToOffers[_tokenId][_offerIndex]]
        );
    }
}
