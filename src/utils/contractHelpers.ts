import type { Signer } from "@ethersproject/abstract-signer";
import type { Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";

import { simpleRpcProvider } from "./web3";

// Addresses
import { getHORTokenAddress, getMulticallAddress } from "./addressHelpers";

// ABI
import horAbi from "../config/abis/hor.json";
import MultiCallAbi from "../config/abis/Multicall.json";

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider);
};

export const getHORTokenContract = (signer?: Signer | Provider) => {
  return getContract(horAbi, getHORTokenAddress(), signer);
};

export const getMulticallContract = (signer?: Signer | Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer);
};
