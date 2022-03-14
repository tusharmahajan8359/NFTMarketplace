//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./CoreCollection.sol";

contract Market {
    
    //Instance of CoreCollection Contract
    CoreCollection coreCollection;

    //Listing Fees for the Market
    uint256 public listingFee = 0.25 ether;

    //Mapping from itemId to its status
    mapping(uint256 => bool) public idToSale;

    //mapping from itemId to its current price
    mapping(uint256 => uint256) public idToPrice;

    constructor(address _contractAddress) {
        coreCollection = CoreCollection(_contractAddress);
    }

    /**
     * @dev Function to send NFT to someone else
     * @param _tokenId {uint256} Id of the NFT token to be transfered
     * @param _to {address} Address of the person to whom the token is to be transfered
     */
    function sendNFT(uint256 _tokenId, address _to) external {
        coreCollection.transferFrom(msg.sender, _to, _tokenId);
    }

    /**
     * @dev Function to List NFT for sale
     */
    function createMarketSale(uint256 _itemId, uint256 _price) external {
        idToSale[_itemId] = true;
        idToPrice[_itemId] = _price;

    }

    /**
     * @dev Function to cancel the listing of the NFT from Marketplace
     */
    function cancelListing(uint256 _itemId) external {
        idToSale[_itemId] = false;
        idToPrice[_itemId] = 0;
    }

    /**
     * @dev Function to Buy NFT
     */
    function buyNFT(uint256 _itemId) external payable {}

    /**
     * @dev Function to Make an offer to a NFT
     */
    function makeOffer() external {}

    /**
     * @dev Function to accept the offer on a NFT owned
     */
    function acceptOffer() external {}
}
