pragma solidity ^0.4.18;

import "../Oracle/PriceFeed.sol";
import "../Utils/Math.sol";


contract PriceOracleInterface {
    using Math for *;

    address public priceFeedSource;
    address public owner;
    
    event NonValidPriceFeed(address priceFeedSource);

     // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    ///@dev constructor of the contract, 
    function PriceOracleInterface(
        address _owner,
        address _priceFeedSource
    )
        public
    {
        owner = _owner;
        priceFeedSource = _priceFeedSource;
    }
   
    function updatePriceFeedSource(
        address _priceFeedSource
    )
        public
        onlyOwner()
    {
        priceFeedSource = _priceFeedSource;
    }

    function updateCruator(
        address _priceFeedSource
    )
        public
        onlyOwner()
    {
        priceFeedSource = _priceFeedSource;
    }

    /// @dev returns the USDETH price in Cents, ie current value would be 45034 == 450 USD and 34 Cents
    function getUSDETHPrice() 
        public
        view
        returns (uint)
    {
        bytes32 price;
        bool valid=true;
        (price, valid) = PriceFeed(priceFeedSource).peek();
        if (!valid) {
            NonValidPriceFeed(priceFeedSource);
        }
        return uint256(price);
    }     
    
    /// @dev returns the USDETH price in Cents, ie current value would be 45034 == 450 USD and 34 Cents
    function getUSDETHPrice2() 
        public
        view
        returns (uint)
    {
        bytes32 price;
        bool valid=true;
        (price, valid) = PriceFeed(priceFeedSource).peek();
        if (!valid) {
            NonValidPriceFeed(priceFeedSource);
        }
        return uint128(price);
    }     
}