// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.4;

interface IBitwiseExample {

  function getDefaultBitwise() external view returns ( bytes4 value );

  function getManualInterfaceID() external view returns ( bytes4 manualInterfaceId );

  function getReverseManualInterfaceID() external view returns ( bytes4 manualInterfaceId );

  function getGeneratedIterfaceId() external view returns ( bytes4 generatedInterfaceId );

}

contract BitwiseExample {

  bytes4 internal defaultBitwise;

  bytes4[] internal functionSelectors;
  bytes4[] internal reverseFunctionSelectors;

  IBitwiseExample bitwise;

  constructor() {
    functionSelectors.push( bitwise.getDefaultBitwise.selector );
    functionSelectors.push( bitwise.getManualInterfaceID.selector );
    functionSelectors.push( bitwise.getGeneratedIterfaceId.selector );
    functionSelectors.push( bitwise.getReverseManualInterfaceID.selector );

    reverseFunctionSelectors.push( bitwise.getGeneratedIterfaceId.selector );
    reverseFunctionSelectors.push( bitwise.getReverseManualInterfaceID.selector );
    reverseFunctionSelectors.push( bitwise.getManualInterfaceID.selector );
    reverseFunctionSelectors.push( bitwise.getDefaultBitwise.selector );
  }

  function getDefaultBitwise() external view returns ( bytes4 value ) {
    value = defaultBitwise;
  }

  function getManualInterfaceID() external view returns ( bytes4 reverseManualInterfaceId ) {

    for( uint8 iteration = 0; reverseFunctionSelectors.length > iteration; iteration++ ) {
      reverseManualInterfaceId = reverseManualInterfaceId ^ reverseFunctionSelectors[iteration];
    }

  }

  function getReverseManualInterfaceID() external view returns ( bytes4 manualInterfaceId ) {

    for( uint8 iteration = 0; functionSelectors.length > iteration; iteration++ ) {
      manualInterfaceId = manualInterfaceId ^ functionSelectors[iteration];
    }

  }

  function getGeneratedIterfaceId() external pure returns ( bytes4 generatedInterfaceId ) {
    generatedInterfaceId = type(IBitwiseExample).interfaceId;
  }
}