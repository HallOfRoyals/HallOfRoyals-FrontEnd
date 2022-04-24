import { ethers } from "ethers";
import { parseInt } from "lodash";
import { CHAIN_ID } from "../config/constants/networks";

const ALERT_LIFTIME = 5000;

const web3Store = {
  state: {
    web3Modal: null,
    chainId: 0,
    provider: null,
    user: {
      active: false,
      address: null,
      balance: 0,
      gasPrice: null,
    },
  },
  mutations: {
    setWeb3Modal(state, web3Modal) {
      state.web3Modal = web3Modal;
    },
    setActive(state, active) {
      state.user.active = active;
    },
    setAccount(state, account) {
      state.user.address = !account ? null : account.toLowerCase();
    },
    setProfile(state, profile) {
      state.user = { ...state.user, ...profile };
    },
    setChainId(state, chainId) {
      state.chainId = chainId;
    },
    setProvider(state, provider) {
      state.provider = provider;
    },
    setBalance(state, balance) {
      state.user.balance = balance;
    },
    setUserGasPrice(state, gasPrice) {
      state.user.gasPrice = gasPrice;
    },
  },
  actions: {
    async connect({ state, commit, dispatch, rootState }) {
      const toast = rootState.toast;
      try {
        const provider = await state.web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const network = await library.getNetwork();

        commit("setProvider", library.provider);
        library.pollingInterval = 12000;

        if (network.chainId != CHAIN_ID) {
          toast.add({
            severity: "error",
            summary: "Unsupported Chain",
            detail: `Make sure you're on BSC mainnet`,
            life: ALERT_LIFTIME,
          });
          return;
        }

        const accounts = await library.listAccounts();
        if (accounts.length > 0) {
          commit("setAccount", accounts[0]);
        } else {
          await dispatch("resetApp");
          return;
        }

        commit("setChainId", network.chainId);
        commit("setActive", true);

        dispatch("loadProfile", accounts[0]);

        provider.on("connect", async (info) => {
          let chainId = parseInt(info.chainId);
          if (chainId != CHAIN_ID) {
            commit("setChainId", null);
            commit("setActive", false);
            toast.add({
              severity: "error",
              summary: "Unsupported Chain",
              detail: `Make sure you're on BSC mainnet`,
              life: ALERT_LIFTIME,
            });
            return;
          }
          commit("setChainId", chainId);
          dispatch("loadProfile", accounts[0]);
        });

        provider.on("accountsChanged", async (accounts) => {
          if (accounts.length > 0) {
            commit("setAccount", accounts[0]);
            dispatch("loadProfile", accounts[0]);
          } else {
            await dispatch("resetApp");
          }
        });
        provider.on("disconnect", async (error) => {
          console.log("error.code");
          console.log(error.code);
        });
        provider.on("chainChanged", async (chainId) => {
          chainId = parseInt(chainId);
          if (chainId != CHAIN_ID) {
            commit("setChainId", null);
            commit("setActive", false);
            toast.add({
              severity: "error",
              summary: "Unsupported Chain",
              detail: `Make sure you're on BSC mainnet`,
              life: ALERT_LIFTIME,
            });
            return;
          }
          commit("setChainId", chainId);
          window.location.reload();
        });
        // eslint-disable-next-line no-empty
      } catch (err) {}
    },
    async resetApp({ state, commit }) {
      try {
        await state.web3Modal.clearCachedProvider();
      } catch (error) {
        console.error(error);
      }
      commit("setAccount", null);
      commit("setActive", false);
      commit("setProvider", null);
      commit("setBalance", 0);
      window.location.reload();
    },
  },
};

export default web3Store;
