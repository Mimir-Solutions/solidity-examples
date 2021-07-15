// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.4;

import "./SelfAwareLib.sol";

contract SelfAware {

  function getContractName() external pure virtual returns ( string memory contractName ) {
    contractName = type(SelfAware).name;
  }

  function getLibraryName() external pure returns ( string memory libraryName ) {
    libraryName = SelfAwareLib.getLibraryName();
  }
}