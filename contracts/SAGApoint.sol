pragma solidity ^0.4.23;

import "./tokens/Token.sol";

/**
 * @dev This is an example contract implementation of Token.
 */
contract SAGApoint is Token {

  constructor()
    public
  {
    tokenName = "SAGA point";
    tokenSymbol = "NTD";
    tokenDecimals = 18;
    tokenTotalSupply = 300000000000000000000000000;
    balances[msg.sender] = tokenTotalSupply;
  }
}