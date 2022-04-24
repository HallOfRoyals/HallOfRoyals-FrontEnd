import { ChainId } from "../config/constants/types";
import addresses from "../config/constants/contracts";
import { Address } from "../config/constants/types";

export const getAddress = (address: Address): string => {
  const chainId = process.env.VUE_APP_PUBLIC_CHAIN_ID;
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET];
};

export const getHORTokenAddress = () => {
  return getAddress(addresses.hor);
};
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall);
};
