import { ethers, run } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Factory } from "../typechain/Factory";
import { NewContract } from "../typechain/NewContract";


chai.use(solidity);

const { expect } = chai;

const zeroAddress = "0x0000000000000000000000000000000000000000";

describe(
  "BitwiseExample",
  () => {

    let signers: any;
    let owner: SignerWithAddress;

    // let contract: Contract;
    let newContract: NewContract;
    let factory: Factory;

    beforeEach(
      async () => {

        signers = await ethers.getSigners();
        owner = signers[0];

        const factoryFactory = await ethers.getContractFactory("Factory", owner);

        factory = (await factoryFactory.connect(owner).deploy()) as Factory;
        factory.deployed();

        // const newContractFactory = await ethers.getContractFactory( "NewContract", owner );

      }
    )

    describe(
      "Verify methods of on-chain contract deployment",
      () => {

        it(
          "On-chain contract deployment from an import using new",
          async () => {

            await factory.connect( owner ).deployFromImport();
            // newContract = await NewContract.at(newContractAddress.address);

            newContract = (await ethers.getContractAt("NewContract", (await factory.connect(owner).newContractAddressFromImport() ) ) ) as NewContract;

            expect( await newContract.getMessage()).to.equal("Hello World!");
          }
        )

        it(
          "On-chain contract salted deployment from an import using new",
          async () => {

            await factory.connect(owner).deployFromImport();
            // newContract = await NewContract.at(newContractAddress.address);

            newContract = (await ethers.getContractAt( "NewContract", ( await factory.connect(owner).newContractAddressFromImport() ) ) ) as NewContract;

            expect(await newContract.getMessage()).to.equal("Hello World!");
          }
        )

        // it(
        //   "On-chain contract salted deployment from an import using new",
        //   async () => {

        //     await factory.connect(owner).deployFromImport();
        //     // newContract = await NewContract.at(newContractAddress.address);

        //     newContract = (await ethers.getContractAt("NewContract", ethers.utils.getCreate2Address( factory.address, ethers.utils.keccak256( ethers.utils.defaultAbiCoder.encode( [ethers.utils.ParamType.from( "0" )], [NewContract.name] ) ), ethers.utils.keccak256( newContract.deployTransaction.data ) ) ) ) as NewContract;

        //     expect(await newContract.getMessage()).to.equal("Hello World!");
        //   }
        // )
      }
    )


  }
)