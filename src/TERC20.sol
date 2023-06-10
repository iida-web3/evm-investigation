// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TERC20 is Ownable, ERC20Capped {
	constructor(
		string memory _name,
		string memory _symbol
	)
		ERC20(_name, _symbol)
		ERC20Capped(100000000000000000000000 * 10 ** decimals())
	{}

	function mint(address to, uint256 amount) public onlyOwner {
		ERC20Capped._mint(to, amount);
	}

	function burn(uint256 amount) public {
		_burn(msg.sender, amount);
	}
}
