// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PoolBetting {
    address public manager;
    address[] public players;
    mapping(address => uint256) public bets;

    modifier onlyManager() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether, "Minimum bet is 0.01 ether");

        players.push(msg.sender);
        bets[msg.sender] = msg.value;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function getPot() public view returns (uint256) {
        uint256 pot = 0;
        for (uint256 i = 0; i < players.length; i++) {
            pot += bets[players[i]];
        }
        return pot;
    }

    function pickWinner() public onlyManager {
        require(players.length > 0, "No players in the pool");

        // Pseudo-randomly select a winner based on the block timestamp
        uint256 index = block.timestamp % players.length;
        address winner = players[index];

        // Transfer the entire pot to the winner
        uint256 pot = getPot();
        payable(winner).transfer(pot);

        // Reset the contract for the next round
        players = new address[](0);
    }
}
