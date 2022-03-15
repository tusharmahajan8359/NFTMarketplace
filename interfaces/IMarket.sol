//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IMarket {
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
    ) external;

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
    ) external payable;

    /**
     * @dev Function to cancel the listing of the NFT from Marketplace
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function cancelListing(uint256 _tokenId, address _coreCollection) external;

    /**
     * @dev Function to Buy NFT
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function buyNFT(uint256 _tokenId, address _coreCollection) external payable;

    /**
     * @dev Function to Make an offer to a NFT
     * @param _tokenId {uint256} Token ID of the NFT
     * @param _coreCollection {address} Address of the CoreCollection Contract
     */
    function makeOffer(
        uint256 _tokenId,
        uint256 _offerPrice,
        address _coreCollection
    ) external;

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
    ) external;
}
