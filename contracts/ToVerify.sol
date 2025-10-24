// SPDX-License-Identifier: MIT
pragma solidity 0.8.29;

import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract ToVerify is OwnableUpgradeable {
    string public greeting;

    function initialize(string memory _greeting) public initializer {
        __Ownable_init(msg.sender);
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public onlyOwner {
        greeting = _greeting;
    }
}
