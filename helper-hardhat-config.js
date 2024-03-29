const networkConfig = {
    4: {
        name: "rinkeby",
        ethUSdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    137: {
        name: "Polygon",
        ethUSdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
};

const developmentChain = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000;

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
};
