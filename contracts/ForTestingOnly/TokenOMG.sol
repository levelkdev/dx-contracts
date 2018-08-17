pragma solidity ^0.4.21;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TokenOMG is StandardToken {
    string public constant symbol = "OMG";
    string public constant name = "OMG Test Token";
    uint8 public constant decimals = 18;

    function TokenOMG(
    	uint amount
    )
    	public 
    {
    	balances[msg.sender] = amount;
    }
}
