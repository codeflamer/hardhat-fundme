const { assert } = require("chai");
const { deployments, getNamedAccounts, network } = require("hardhat");
const { developmentChain } = require("../../helper-hardhat-config");

developmentChain.includes(network.name)
    ? describe.skip
    : describe("fundMe", async () => {
          let fundMe;
          let deployer;
          const sendValue = ethers.utils.parseEther("200");
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer;
              // await deployments.fixture["all"];
              fundMe = await ethers.getContract("FundMe", deployer);
          });
          it("allows people to fund and withdraw ", async () => {
              await fundMe.fund({ value: sendValue });
              await fundMe.withdraw();
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              );
              assert.equal(endingBalance.toString(), "0");
          });
      });
