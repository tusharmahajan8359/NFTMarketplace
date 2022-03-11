//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ICoreCollection {
    /**
     * @dev function to mint NFT and add it to the collection
     * @param _tokenURI {string} IPFS URI
     * @param _collectionId {uint256} index to lookup particular collection of a user
     */
    function createToken(string memory _tokenURI, uint256 _collectionId)
        external;

    /**
     * @dev function to create a new collection
     * @param _name {string} name of the collection
     */
    function createCollection(string memory _name) external;
}
