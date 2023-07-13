// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract hashing {

    address public owner;

    constructor() {
      owner = msg.sender;
    }

    event HashedString(bytes32 _hash);
    event HashedStrings(bytes32[] _hashes);
    event HashedPair(bytes32 _hash);

    function hashString(string memory str) public returns (bytes32) {
        bytes32 _hash = keccak256(abi.encodePacked(str));
        emit HashedString(_hash);
        return _hash;
    }

    function hashStrings(string[] memory strs) public returns (bytes32[] memory _hashes) {
        _hashes = new bytes32[](strs.length);
        for (uint8 i = 0; i < strs.length; i++) {
            bytes32 _hash = keccak256(abi.encodePacked(strs[i]));
            _hashes[i] = _hash;
        }
        emit HashedStrings(_hashes);
        return _hashes;
    }

    function hashPairs(bytes32 left, bytes32 right) public returns (bytes32) {
        bytes32 _hash = keccak256(abi.encodePacked(left, right));
        emit HashedPair(_hash);
        return _hash;
    }
}