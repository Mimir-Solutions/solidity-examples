// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.4;

contract NewContract {

  string public getMessage;

  constructor() {
    getMessage = "Hello World!";
  }
  
}