import { ethers, run } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BitwiseExample } from "../../nfy-v3/typechain/BitwiseExample";

chai.use(solidity);

const { expect } = chai;

const zeroAddress = "0x0000000000000000000000000000000000000000";

describe(
  "BitwiseExample",
  () => {

    let signers: any;
    let owner: SignerWithAddress;

    let bitwise: BitwiseExample;

    beforeEach(
      async () => {

        signers = await ethers.getSigners();
        owner = signers[0];

        const bitwiseFactory = await ethers.getContractFactory( "BitwiseExample", owner );

        bitwise = ( await bitwiseFactory.connect( owner ).deploy() ) as BitwiseExample;
        bitwise.deployed();

      }
    )

    describe( 
      "Verify bitwise operations in bytes4",
      () => {

        it(
          "Default value of bytes4 should be 0",
          async () => {
            expect(await bitwise.getDefaultBitwise()).to.equal( "0x00000000" );
          }
        )

        it(
          "Confirm generated interfaceid",
          async  () => {
            expect(await bitwise.getGeneratedIterfaceId()).to.equal( "0x95485ea6" );
          }
        )

        it(
          "Manually generated interfaceid should match generated interfaceid",
          async () => {
            expect(await bitwise.getManualInterfaceID()).to.equal( "0x95485ea6" );
          }
        )

        it(
          "Reverse of Manually generated interfaceid should match generated interfaceid",
          async () => {
            expect(await bitwise.getReverseManualInterfaceID()).to.equal("0x95485ea6");
          }
        )
      }
    )


  }
)