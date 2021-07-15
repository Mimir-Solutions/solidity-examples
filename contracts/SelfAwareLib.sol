// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.4;

library SelfAwareLib {

  function getLibraryName() external pure returns ( string memory contractName ) {
    contractName = type(SelfAwareLib).name;
  }

  // struct Self {
  //   string contractName;
  //   address contractAddress;
  // }

  // function getContractName( Self self ) external view returns ( string memory contractName ) {
  //   contractName = self.contractName;
  // }

}