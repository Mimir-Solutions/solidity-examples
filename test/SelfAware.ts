import { ethers, run } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SelfAwareLib } from "../../nfy-v3/typechain/SelfAwareLib";
import { SelfAware } from "../../nfy-v3/typechain/SelfAware";

chai.use(solidity);

const { expect } = chai;

const zeroAddress = "0x0000000000000000000000000000000000000000";

describe(
  "SelfAware",
  () => {
    let signers: any;
    let owner: SignerWithAddress;
    let selfAwareLib: SelfAwareLib;
    let selfAware: SelfAware;

    beforeEach(
      async () => {
        signers = await ethers.getSigners();
        owner = signers[0];

        const selfAwareLibFactory = await ethers.getContractFactory( "SelfAwareLib", owner);
        selfAwareLib = ( await selfAwareLibFactory.connect( owner ).deploy() ) as SelfAwareLib;
        selfAwareLib.deployed();

        const selfAwareFactory = await ethers.getContractFactory(
          "SelfAware",
          {
            libraries: {
              SelfAwareLib: selfAwareLib.address
            }
          }
        );
        selfAware = ( await selfAwareFactory.connect( owner).deploy() ) as SelfAware;
        selfAware.deployed();
      }
    )

    describe( 
      "Check that a contract can get it's own name.",
      () => {

        it(
          "Get contract name from self.",
          async () => {
            expect( await selfAware.getContractName() ).to.equal( "SelfAware" );
          }
        )
      }
    )

    describe(
      "Check that a contract can get a library's name.",
      () => {

        it(
          "Get contract name from library.",
          async () => {
            expect(await selfAware.getLibraryName()).to.equal("SelfAwareLib");
          }
        )
      }
    )
  }
)