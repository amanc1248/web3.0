// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCouter;
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        uint256 keyword;
    }
    TransferStruct[] transactions;

    function addToBlockchain() public {}

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        // return transactions
    }

    function getTransactionsCount() public view returns (uint256) {
        // return transactionsCount
    }
}
