// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.4;

import "./NewContract.sol";

contract Factory {

  address public newContractAddressFromImport;

  function deployFromImport() external {
    NewContract newContract = new NewContract();
    newContractAddressFromImport = address(newContract);
  }

  function saltedDeployFromImport() external {
    NewContract newContract = new NewContract{ salt: keccak256(abi.encodePacked( type(NewContract).name ) ) }();
    newContractAddressFromImport = address(newContract);
  }

}