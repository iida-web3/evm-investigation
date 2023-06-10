// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import { stdStorage, StdStorage, Test } from "forge-std/Test.sol";
import { console } from "forge-std/console.sol";
import { TERC20 } from "../../src/TERC20.sol";

contract TERC20Test is Test {
	event Transfer(
		address indexed from,
		address indexed to,
		uint256 value
	);
	event Approval(
		address indexed owner,
		address indexed spender,
		uint256 value
	);

	TERC20 private terc20;
	uint256 private ownerPrivateKey;
	uint256 private toPrivateKey;

	address private owner;
	address private userOne;
	uint256 private amount;
	address private userTwo;
	address private userThree;
	address private userFour;

	string private _name = "name";
	string private _symbol = "symbol";

	function setUp() public {
		ownerPrivateKey = 0xA11CE;
		toPrivateKey = 0xB0B;

		owner = vm.addr(ownerPrivateKey);
		userOne = vm.addr(toPrivateKey);
		userTwo = vm.addr(3);
		userThree = vm.addr(4);
		userFour = vm.addr(5);

		vm.startPrank(owner);
		terc20 = new TERC20(_name, _symbol);

		terc20.mint((owner), 1000 ether);
		terc20.mint((userOne), 1000 ether);
		terc20.mint((userTwo), 1000 ether);
		vm.stopPrank();
	}

	function testName() public {
		assertEq(terc20.name(), _name);
	}

	function testSymbol() public {
		assertEq(terc20.symbol(), _symbol);
	}

	function testCap() public {
		assertEq(terc20.cap(), 260000000000 * 10 ** 18);
	}

	function testTotalSupply() public {
		assertEq(terc20.totalSupply(), 3000 ether);
	}

	function testBalanceOf() public {
		assertEq(terc20.balanceOf(owner), 1000 ether);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(terc20.balanceOf(userTwo), 1000 ether);
	}

	function testTransferWithSuccess() public {
		vm.prank(userOne);
		vm.expectEmit(true, true, true, true);
		emit Transfer(userOne, userThree, 500 ether);
		terc20.transfer(userThree, 500 ether);
		assertEq(terc20.balanceOf(userOne), 500 ether);
		assertEq(terc20.balanceOf(userThree), 500 ether);
	}

	function testTransferToZeroAddressWithFailure() public {
		vm.prank(userOne);
		vm.expectRevert(
			bytes("ERC20: transfer to the zero address")
		);
		terc20.transfer(address(0), 1 ether);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(terc20.balanceOf(address(0)), 0);
	}

	function testTransferWhenAmmountExceedsBalanceWithFailure()
		public
	{
		vm.prank(userOne);
		vm.expectRevert(
			bytes("ERC20: transfer amount exceeds balance")
		);
		terc20.transfer(userThree, 99999999 ether);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(terc20.balanceOf(userThree), 0);
	}

	function testTransferWhenBalanceIsZeroWithFailure() public {
		vm.prank(userThree);
		vm.expectRevert(
			bytes("ERC20: transfer amount exceeds balance")
		);
		terc20.transfer(userFour, 1000 ether);
		assertEq(terc20.balanceOf(userThree), 0);
		assertEq(terc20.balanceOf(userFour), 0);
	}

	function testApproveWithSuccess() public {
		vm.prank(userOne);
		vm.expectEmit(true, true, true, true);
		emit Approval(
			address(userOne),
			address(userThree),
			999999 ether
		);
		terc20.approve(userThree, 999999 ether);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(
			terc20.allowance(userOne, userThree),
			999999 ether
		);
	}

	function testUpdateApproveWithSuccess() public {
		vm.startPrank(userOne);
		terc20.approve(userThree, 999999 ether);
		vm.expectEmit(true, true, true, true);
		emit Approval(
			address(userOne),
			address(userThree),
			999 ether
		);
		terc20.approve(userThree, 999 ether);
		vm.stopPrank();
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(
			terc20.allowance(userOne, userThree),
			999 ether
		);
	}

	function testTransferFromWithSuccess() public {
		vm.prank(userOne);
		vm.expectEmit(true, true, true, true);
		emit Approval(userOne, userThree, 500 ether);
		terc20.approve(userThree, 500 ether);
		assertEq(
			terc20.allowance(userOne, userThree),
			500 ether
		);
		vm.prank(userThree);
		vm.expectEmit(true, true, true, true);
		emit Transfer(
			address(userOne),
			address(userFour),
			500 ether
		);
		terc20.transferFrom(userOne, userFour, 500 ether);
		assertEq(terc20.allowance(userOne, userThree), 0);
		assertEq(terc20.balanceOf(userOne), 500 ether);
		assertEq(terc20.balanceOf(userFour), 500 ether);
	}

	function testTransferFromInsufficientAllowanceWithFailure()
		public
	{
		vm.prank(userOne);
		vm.expectEmit(true, true, true, true);
		emit Approval(userOne, userFour, 500 ether);
		terc20.approve(userFour, 500 ether);
		assertEq(terc20.allowance(userOne, userFour), 500 ether);

		vm.prank(userThree);
		vm.expectRevert(bytes("ERC20: insufficient allowance"));
		terc20.transferFrom(userOne, userFour, 500 ether);
		assertEq(terc20.allowance(userOne, userFour), 500 ether);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(terc20.balanceOf(userFour), 0);
	}

	function testTransferFromInsufficientBalanceWithFailure()
		public
	{
		vm.prank(userOne);
		vm.expectEmit(true, true, true, true);
		emit Approval(
			address(userOne),
			address(userThree),
			999999 ether
		);
		terc20.approve(userThree, 999999 ether);
		assertEq(
			terc20.allowance(userOne, userThree),
			999999 ether
		);

		vm.prank(userThree);
		vm.expectRevert(
			bytes("ERC20: transfer amount exceeds balance")
		);
		terc20.transferFrom(userOne, userThree, 999999 ether);
		assertEq(
			terc20.allowance(userOne, userThree),
			999999 ether
		);
		assertEq(terc20.balanceOf(userOne), 1000 ether);
		assertEq(terc20.balanceOf(userThree), 0);
	}

	function testMintToWithSuccess() public {
		vm.prank(owner);
		vm.expectEmit(true, true, true, true);
		emit Transfer(address(0), userThree, 1000 ether);
		terc20.mint(userThree, 1000 ether);
		assertEq(terc20.balanceOf(userThree), 1000 ether);
		assertEq(terc20.totalSupply(), 4000 ether);
	}

	function testMintToWithNoAuthorizationWithFailure() public {
		vm.prank(userOne);
		vm.expectRevert(
			bytes("Ownable: caller is not the owner")
		);
		terc20.mint(userThree, 1000 ether);
		assertEq(terc20.balanceOf(userThree), 0);
		assertEq(terc20.totalSupply(), 3000 ether);
	}

	function testMintZeroAddressWithFailure() public {
		vm.prank(owner);
		vm.expectRevert(
			bytes("ERC20: mint to the zero address")
		);
		terc20.mint(address(0), 1000 ether);
		assertEq(terc20.balanceOf(address(0)), 0);
		assertEq(terc20.totalSupply(), 3000 ether);
	}

	function testBurnWithSuccess() public {
		vm.prank(owner);
		vm.expectEmit(true, true, true, true);
		emit Transfer(address(owner), address(0), 1000 ether);
		terc20.burn(1000 ether);
		assertEq(terc20.balanceOf(owner), 0);
		assertEq(terc20.totalSupply(), 2000 ether);
	}

	function testBurnWhenAmmountExceedsBalanceWithFailure()
		public
	{
		vm.prank(owner);
		vm.expectRevert(
			bytes("ERC20: burn amount exceeds balance")
		);
		terc20.burn(999999 ether);
		assertEq(terc20.balanceOf(owner), 1000 ether);
	}
}
