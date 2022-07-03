import abiNFT from "../abis/NFT.json";
import abiStake from "../abis/Stake.json";
import { ChainID } from "../types";

const CONTRACTS = {
  nft: {
    addresses: {
      [ChainID.Rinkeby]: "0xb6b5befd3EEAF561Fbf32E37455c30018C4BE27D",
    },
    abi: abiNFT,
  },
  stake: {
    addresses: {
      [ChainID.Rinkeby]: "0xdBD508003Cc7adda91F263434AE8f96F71285d68",
    },
    abi: abiStake,
  },
};

export default CONTRACTS;
