const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Withdraw Contract.......");
    // const transactionResponse = await fundMe.fund({
    //     value: ethers.utils.parseEther("100"),
    // });
    const transactionResponse = await fundMe.withdraw();
    await transactionResponse.wait(1);
    console.log("Funded!!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
